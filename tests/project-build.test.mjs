import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';

test('each published JSON project is linked on the home page and has a directly accessible static page', async () => {
  const home = await readFile('dist/index.html', 'utf8');
  const files = (await readdir('src/data/projects')).filter(name => name.endsWith('.json'));
  for (const file of files) {
    const project = JSON.parse(await readFile(`src/data/projects/${file}`, 'utf8'));
    const route = `/projects/${project.slug}/`;
    if (project.draft) { assert.ok(!home.includes(`href="${route}"`), `Draft leaked: ${file}`); continue; }
    assert.ok(home.includes(`href="${route}"`), `Missing home link: ${file}`);
    const detail = await readFile(`dist${route}index.html`, 'utf8');
    assert.ok(detail.includes('href="/#projects"'), `Missing return link: ${file}`);
    for (const section of project.sections) assert.ok(detail.includes(section.title), `Missing section: ${file}`);
  }
});

test('build artifact excludes agent documentation and skill packages', async () => {
  for (const path of ['agentdocs', '.agents', 'AGENTS.md', 'README.md']) {
    await assert.rejects(access(`dist/${path}`));
  }
  await access('dist/404.html');
});

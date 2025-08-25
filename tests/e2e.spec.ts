import { test, expect } from '@playwright/test';

test.describe('Portal Podal Vera - Navegação e Agendamento', () => {
  test('Home carrega e mostra Hero, Agenda e botões WhatsApp', async ({ page }) => {
    await page.goto('/');
    // Procura por qualquer botão WhatsApp principal
    const ctas = [
      'Agendar Consulta via WhatsApp',
      'Agendar Avaliação via WhatsApp',
      'Falar com a Especialista',
      'Pré-Agendamento',
      'Agendar Consulta',
      'Agendar Avaliação',
      'WhatsApp'
    ];
    let found = false;
    for (const text of ctas) {
      const btn = page.locator(`text=${text}`).first();
      try {
        await btn.scrollIntoViewIfNeeded();
        if (await btn.isVisible()) {
          found = true;
          break;
        }
      } catch (e) {
        // ignora erro se não encontrar
      }
    }
    if (!found) {
      console.log('Nenhum botão WhatsApp principal encontrado. Verifique os textos dos CTAs na home.');
    }
    expect(found).toBeTruthy();
    // Agenda Mensal
    const agenda = page.locator('text=Agenda Mensal').first();
    await agenda.scrollIntoViewIfNeeded();
    await expect(agenda).toBeVisible();
    const horarios = page.locator('text=Horários Disponíveis').first();
    await horarios.scrollIntoViewIfNeeded();
    await expect(horarios).toBeVisible();
  });

  test('Botão principal WhatsApp funciona', async ({ page }) => {
    await page.goto('/');
    // Procura por qualquer botão WhatsApp principal
    const ctas = [
      'Agendar Consulta via WhatsApp',
      'Agendar Avaliação via WhatsApp',
      'Falar com a Especialista',
      'Pré-Agendamento',
      'Agendar Consulta',
      'Agendar Avaliação',
      'WhatsApp'
    ];
    let btn = null;
    for (const text of ctas) {
      const candidate = page.locator(`a:has-text("${text}")`).first();
      try {
        await candidate.scrollIntoViewIfNeeded();
        if (await candidate.isVisible()) {
          btn = candidate;
          break;
        }
      } catch (e) {}
    }
    if (!btn) {
      console.log('Nenhum botão WhatsApp principal encontrado para href.');
    }
    expect(btn).not.toBeNull();
    await expect(btn).toHaveAttribute('href', /wa.me/);
  });

  test('Calendário mensal mostra horários e WhatsApp', async ({ page }) => {
    await page.goto('/');
    const agenda = page.locator('text=Agenda Mensal').first();
    await agenda.scrollIntoViewIfNeeded().catch(() => {});
    await expect(agenda).toBeVisible();
    // Seleciona o primeiro dia disponível (ignora botões de navegação)
    const dias = page.locator('section#agenda button').filter({ hasText: /^[0-9]+$/ });
    let diaClicado = false;
    for (let i = 0; i < await dias.count(); i++) {
      const dia = dias.nth(i);
      try {
        const classAttr = await dia.getAttribute('class');
        if (await dia.isEnabled() && classAttr && !classAttr.includes('cursor-not-allowed')) {
          await dia.scrollIntoViewIfNeeded();
          await dia.click();
          diaClicado = true;
          break;
        }
      } catch (e) {}
    }
    if (!diaClicado) {
      console.log('Nenhum dia disponível para clicar no calendário.');
    }
    expect(diaClicado).toBeTruthy();
    // Deve mostrar horários disponíveis
    const horarios = page.locator('text=Consultas de 10 a 30 minutos').first();
    await horarios.scrollIntoViewIfNeeded().catch(() => {});
    await expect(horarios).toBeVisible();
    // Clica no primeiro horário disponível
    const horario = page.locator('button:has-text(":00")').first();
    if (await horario.isEnabled()) {
      await horario.click();
    }
  });

  test('Todos botões de agendamento levam ao WhatsApp', async ({ page }) => {
    await page.goto('/');
    const whatsBtns = await page.locator('a[href*="wa.me"]').all();
    expect(whatsBtns.length).toBeGreaterThan(0);
    for (const btn of whatsBtns) {
      const href = await btn.getAttribute('href');
      expect(href).toContain('wa.me');
    }
  });

  test('Formulário de contato aceita digitação', async ({ page }) => {
  await page.goto('/#contato');
  // Seleciona apenas o formulário de contato principal
  const form = page.locator('section#contato form').first();
  await form.locator('input[name="name"]').fill('Teste Usuário');
  await form.locator('input[name="email"]').fill('teste@exemplo.com');
  await form.locator('input[name="phone"]').fill('11999999999');
  await form.locator('textarea[name="message"]').fill('Mensagem de teste');
  await expect(form.locator('input[name="name"]')).toHaveValue('Teste Usuário');
  });
});

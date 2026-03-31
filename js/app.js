function analyzeStrategy() {
  const type = document.getElementById("playerType").value;
  const resource = document.getElementById("resource").value;
  const status = document.getElementById("status").value;
  const level = parseInt(document.getElementById("level").value) || 1;

  // Validación
  if (!type || !resource || !status) {
    alert("⚠️ Por favor completa todos los campos");
    return;
  }

  const strategy = getStrategy(type, status, resource);
  
  if (!strategy) {
    document.getElementById("output").innerHTML = 
      "<p class='placeholder'>Estrategia no encontrada. Intenta de nuevo.</p>";
    return;
  }

  // Generar resultado
  let result = `${strategy.title}\n\n`;
  result += `📝 ${strategy.description}\n\n`;
  result += `🎯 TÁCTICAS RECOMENDADAS:\n`;
  result += strategy.tactics.join("\n");
  result += `\n\n⏱️ Tiempo estimado: ${strategy.time}`;
  result += `\n🎖️ Nivel recomendado: ${Math.max(level, 5)}+`;

  document.getElementById("output").innerText = result;

  // Mostrar estadísticas
  displayStats(strategy, type, resource, level);
  
  // Mostrar botón de compartir
  document.getElementById("shareBtn").style.display = "block";
}

function displayStats(strategy, type, resource, level) {
  const statsDiv = document.getElementById("stats");
  
  const riskLevel = strategy.risk;
  const efficiency = strategy.efficiency;
  const reward = Math.round((efficiency + level * 2) / 2);

  statsDiv.innerHTML = `
    <div class="stat-item">
      <div class="stat-label">Riesgo</div>
      <div class="stat-value">${riskLevel}%</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">Eficiencia</div>
      <div class="stat-value">${efficiency}%</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">Recompensa Est.</div>
      <div class="stat-value">${reward}%</div>
    </div>
    <div class="stat-item">
      <div class="stat-label">Recurso</div>
      <div class="stat-value">${resource.toUpperCase().substring(0, 3)}</div>
    </div>
  `;
}

function shareStrategy() {
  const output = document.getElementById("output").innerText;
  const type = document.getElementById("playerType").options[document.getElementById("playerType").selectedIndex].text;
  const resource = document.getElementById("resource").options[document.getElementById("resource").selectedIndex].text;
  const status = document.getElementById("status").options[document.getElementById("status").selectedIndex].text;

  const text = `🎮 Mi estrategia en RaiderBase:\n${type} | ${resource} | ${status}\n\n${output}`;

  if (navigator.share) {
    navigator.share({
      title: "Mi Estrategia RaiderBase",
      text: text
    });
  } else {
    // Fallback: copiar al portapapeles
    navigator.clipboard.writeText(text).then(() => {
      alert("✅ ¡Estrategia copiada al portapapeles!");
    });
  }
}

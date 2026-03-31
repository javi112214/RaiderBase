const STRATEGIES = {
  stealth: {
    low: {
      title: "🥷 Estrategia Sigilosa - Supervivencia",
      description: "Como sigiloso con pocos recursos, necesitas ser muy cuidadoso.",
      tactics: [
        "✅ Evita zonas controladas por enemigos poderosos",
        "✅ Usa rutas secundarias y poco transitadas",
        "✅ Farmea recursos en horarios de baja actividad",
        "✅ Construye alianzas con otros jugadores sigilosos",
        "✅ Mantén un nivel bajo de visibilidad"
      ],
      risk: 15,
      efficiency: 45,
      time: "Largo"
    },
    mid: {
      title: "🥷 Estrategia Sigilosa - Equilibrio",
      description: "Tienes suficientes recursos para tomar más riesgos calculados.",
      tactics: [
        "✅ Explora zonas de riesgo moderado",
        "✅ Coordina pequeños raids con aliados",
        "✅ Negocia con facciones neutrales",
        "✅ Establece puntos de seguridad",
        "✅ Acumula información de mapas"
      ],
      risk: 35,
      efficiency: 65,
      time: "Medio"
    },
    high: {
      title: "🥷 Estrategia Sigilosa - Dominación",
      description: "Con muchos recursos, puedes controlar zonas clave.",
      tactics: [
        "✅ Domina puntos estratégicos sin confrontación",
        "✅ Espía a facciones enemigas",
        "✅ Invierte en tecnología de sigilo",
        "✅ Crea redes de información",
        "✅ Planifica grandes operaciones encubiertas"
      ],
      risk: 25,
      efficiency: 80,
      time: "Corto"
    }
  },
  aggressive: {
    low: {
      title: "⚡ Estrategia Agresiva - Combate por Sobrevivencia",
      description: "Con pocos recursos pero agresivo, necesitas ser valiente pero táctico.",
      tactics: [
        "✅ Busca jugadores solitarios para emboscadas",
        "✅ Participa en raids en grupo",
        "✅ Saquea bases poco defendidas",
        "✅ Negocia treguas con jugadores más fuertes",
        "✅ Usa el elemento sorpresa a tu favor"
      ],
      risk: 70,
      efficiency: 50,
      time: "Corto"
    },
    mid: {
      title: "⚡ Estrategia Agresiva - Ofensiva Equilibrada",
      description: "Tienes poder suficiente para raid coordinados.",
      tactics: [
        "✅ Lidera ataques a bases enemigas",
        "✅ Forma coaliciones agresivas",
        "✅ Controla territorios disputados",
        "✅ Invierte en armas y defensas",
        "✅ Desafía a facciones rivales"
      ],
      risk: 55,
      efficiency: 70,
      time: "Medio"
    },
    high: {
      title: "⚡ Estrategia Agresiva - Dominación Militar",
      description: "Eres una potencia militar. Impón tu voluntad.",
      tactics: [
        "✅ Conquista territorios clave",
        "✅ Protege aliados menores",
        "✅ Construye fortificaciones masivas",
        "✅ Crea una reputación temible",
        "✅ Establece un imperio de poder"
      ],
      risk: 40,
      efficiency: 85,
      time: "Largo"
    }
  },
  collector: {
    low: {
      title: "🎒 Estrategia Recolector - Búsqueda Desesperada",
      description: "Necesitas farmear eficientemente sin exponerte.",
      tactics: [
        "✅ Identifica puntos de farmeo seguros",
        "✅ Optimiza rutas de recolección",
        "✅ Comercia con otros recolectores",
        "✅ Busca zonas olvidadas",
        "✅ Participa en eventos de recolección"
      ],
      risk: 20,
      efficiency: 55,
      time: "Largo"
    },
    mid: {
      title: "🎒 Estrategia Recolector - Expansión de Rutas",
      description: "Puedes explorar nuevas zonas de farmeo.",
      tactics: [
        "✅ Mapea zonas nuevas de recursos",
        "✅ Establece rutas eficientes",
        "✅ Comercia en mercados secundarios",
        "✅ Coopera con aliados recolectores",
        "✅ Invierte en herramientas de farmeo"
      ],
      risk: 30,
      efficiency: 75,
      time: "Medio"
    },
    high: {
      title: "🎒 Estrategia Recolector - Imperio Comercial",
      description: "Controlas los recursos. Monopoliza el mercado.",
      tactics: [
        "✅ Crea puntos de farmeo especializados",
        "✅ Negocia acuerdos de suministro",
        "✅ Establece precios de mercado",
        "✅ Construye depósitos estratégicos",
        "✅ Forma carteles comerciales"
      ],
      risk: 25,
      efficiency: 90,
      time: "Corto"
    }
  }
};

function getStrategy(playerType, status, resource) {
  return STRATEGIES[playerType]?.[status] || null;
}

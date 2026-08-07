(function(){
  const translations = {
    fr: {
      nav_alliance:"Alliance", nav_news:"News", nav_leadership:"Leadership", nav_nap:"NAP", nav_events:"Événements", nav_guides:"Guides", nav_codes:"Codes",
      milestone_label:'Prochain palier de puissance <strong>2B</strong>',
      milestone_remain:'— 90M restants',
      hero_region_tag:"Région 4511",
      hero_sub:"Quand le froid a tout emporté, <strong>LUX</strong> a gardé la lumière allumée. Une alliance internationale de la région 4511 sur Whiteout Survival — discipline, esprit d'équipe, et une flamme qui ne s'éteint jamais.",
      scroll_cue:"Défiler ↓",
      news_eyebrow:"Dernières nouvelles", news_title:"News",
      news_status:"À noter",
      news_h3:"Les héros Gen 2 arrivent",
      news_body:`<p style="margin-bottom:.7rem;">Chaque génération de héros apporte trois nouveaux héros — un Infanterie, un Lancier et un Tireur. Chaque génération comprend 5 à 6 Roues Chanceuses (une génération dure environ 80 jours). Tu pourras toujours choisir les héros précédents aussi.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Flint</strong> arrive sur la roue dans trois jours et quelques heures — un héros Infanterie, et important à obtenir. C'est une énorme amélioration par rapport à Sergey.</p>
      <p style="margin-bottom:.7rem;">Il n'y a pas de nombre exact de diamants nécessaires pour l'obtenir, mais la roue dépend de la chance plus des paliers de tirages spécifiques qui garantissent des fragments de héros.</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">1 tirage : 1 500 diamants — 10 tirages : 13 500 diamants.</li>
        <li style="margin-bottom:.4rem;">Utilise l'option 10 tirages — c'est moins cher par tirage.</li>
        <li style="margin-bottom:.4rem;">Les paliers garantis de fragments s'afficheront sur la roue une fois l'événement lancé.</li>
        <li style="margin-bottom:.4rem;">Le dernier palier est à 120 tirages — ne dépasse pas ce seuil sauf si tu es vraiment très riche. Atteindre 120 tirages coûte environ <strong style="color:var(--ice);">162 000 diamants</strong>.</li>
        <li>Le Jour 2 du HOC donne des points pour la roue.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;margin-bottom:.9rem;"><strong style="color:var(--ice);">Note :</strong> n'utilise pas les fragments génériques sur les héros de la roue.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Résumé :</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.4rem;">Ne tourne la roue que si tu as assez de gemmes pour 70 ou 120 tirages au total par événement.</li>
        <li style="margin-bottom:.4rem;">Fais toujours des tirages 10x pour avoir la réduction.</li>
        <li style="margin-bottom:.4rem;">Ton objectif est d'atteindre au moins 4 étoiles sur le héros.</li>
        <li style="margin-bottom:.4rem;">N'utilise jamais les fragments génériques sur un héros de la roue — mieux vaut les garder jusqu'à en avoir ~475, puis tout utiliser sur un héros hors-roue au début d'une future génération pour l'amener à 4 étoiles.</li>
        <li>Si tu participes au HOC, utilise aussi la roue le Jour 2.</li>
      </ul>`,
      about_eyebrow:"L'alliance", about_title:"À propos &amp; règles",
      about_p1:'<strong>LUX</strong> — « lumière » en latin — rassemble des chefs de la région 4511 qui ont choisi de survivre et de progresser ensemble plutôt que seuls dans le blizzard.',
      about_p2:"Nous valorisons <strong>l'entraide quotidienne</strong> (aide à la construction, partage de ressources) et <strong>la participation active</strong> aux événements de l'alliance et de la région.",
      about_rules:`<li><em>01</em> Reste actif : connexion quotidienne recommandée.</li>
        <li><em>02</em> Participe aux événements de l'alliance (siège, guerre, migration).</li>
        <li><em>03</em> Respect entre membres — aucune toxicité tolérée.</li>
        <li><em>04</em> Préviens-nous si tu t'absentes un moment.</li>
        <li><em>05</em> Contribue régulièrement à la recherche de l'alliance.</li>`,
      stat_fullname:"Nom complet", stat_region:"Région", stat_power:"Puissance", stat_rank:"Rang royaume", stat_founded:"Fondée le", stat_language:"Langue", stat_language_val:"Toutes langues", stat_members:"Membres",
      roster_eyebrow:"Effectif", roster_title:"Leadership",
      th_name:"Nom", th_rank:"Rang", th_role:"Rôle", role_leader:"Chef d'alliance",
      roster_note:"Leadership R5/R4 à jour.",
      nap_eyebrow:"Diplomatie", nap_title:"Pacte de non-agression (NAP)",
      nap_intro:"Pacte de non-agression négocié entre les R4/R5 des deux alliances. Tous les membres doivent respecter ces règles :",
      nap_list:`<li style="margin-bottom:.55rem;">Aucune attaque sur les villes, rallyes, QG ou bannières des membres du NAP.</li>
      <li style="margin-bottom:.55rem;">Aucun espionnage des villes ou cases de ressources du NAP.</li>
      <li style="margin-bottom:.55rem;">Aucun débauchage de joueurs du NAP.</li>
      <li style="margin-bottom:.55rem;">Les violations sont d'abord réglées entre les R4/R5 des deux alliances.</li>
      <li style="margin-bottom:.55rem;">Les sanctions touchent uniquement le joueur, pas l'alliance — 1er : avertissement, 2e : rétrogradation, 3e : exclu du NAP.</li>
      <li style="margin-bottom:.55rem;">Forteresse / Installation / Bastion : aucune attaque de ville pendant ces batailles ; 1 forteresse par alliance (selon le rang, vérifié le dimanche) ; le Bastion est réservé au Top 4 des alliances ; interdiction de bloquer les chemins ou d'engloutir les installations de bannière.</li>
      <li style="margin-bottom:.55rem;">Un seul compte ferme/académie par alliance.</li>
      <li style="margin-bottom:.55rem;">Interdiction de retirer son tag pour attaquer une alliance du Top 10 afin de contourner le NAP.</li>
      <li style="margin-bottom:.55rem;">Les règles PvP des événements prennent le pas sur le NAP pendant SvS, Bear Invasion Alliance, Brothers Battle, etc.</li>
      <li>Respect, coopération et fair-play en toutes circonstances.</li>`,
      events_eyebrow:"En cours", events_title:"Événements",
      status_signup:"Inscriptions ouvertes", status_guidelines:"Consignes", status_upcoming:"À venir", status_reference:"Référence",
      champ_h3:"Championnat de l'alliance",
      champ_body:`<p style="margin-bottom:.7rem;">Même si tu ne peux pas combattre, tu reçois quand même des récompenses juste pour t'être inscrit — n'oublie pas de t'inscrire.</p>
      <ol style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.5rem;">Envoie tes 3 meilleurs héros.</li>
        <li style="margin-bottom:.5rem;">Pour la répartition des troupes, essaie de respecter au mieux un ratio Infanterie : Lancier : Tireur de 5:2:3.</li>
        <li>Il y aura une période d'ajustement des lignes après l'inscription — pour faciliter les choses, inscris-toi sur la ligne du milieu.</li>
      </ol>`,
      bear_h3:"Bear Traps — Stratégie de rallye",
      bear_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Lance un rallye</strong> avec tes meilleurs héros — pas de Gina, pas de héros bleus. Équilibre tes troupes pour pouvoir rejoindre un maximum de points de rallye.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Puis rejoins les autres rallyes</strong> menés avec :</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Jessie + un autre + un autre (équilibre)</li>
        <li style="margin-bottom:.4rem;">Jaser + un autre + un autre (équilibre)</li>
        <li style="margin-bottom:.4rem;">Seo Yoon + un autre + un autre (équilibre)</li>
        <li>Tu peux aussi rejoindre sans héros.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;"><strong style="color:var(--ice);">Attention :</strong> un mauvais héros impacte tout le rallye.</p>`,
      weapon_h3:"Événement Usine d'Armes",
      weapon_body:`Les inscriptions ferment aujourd'hui.<br>
      Escouade 1 — UTC 14:00<br>
      Escouade 2 — UTC 19:00<br><br>
      N'oublie pas de t'inscrire à l'avance. Manquer deux inscriptions sans raison valable entraînera ton retrait de la participation — inscris-toi seulement si tu peux vraiment être présent.<br><br>
      <strong style="color:var(--ice);">Note :</strong> voter pour un créneau horaire n'est <em style="font-style:italic;color:var(--frost);">pas</em> la même chose que s'inscrire. Tu dois aller dans l'escouade pour laquelle tu as voté et cocher « participer ».`,
      siege_h3:"Siège de l'alliance",
      siege_body:`<p style="margin-bottom:.8rem;">Deux événements de siège à venir — <strong style="color:var(--ice);">Bastion Fort</strong> et <strong style="color:var(--ice);">Solar Castle</strong>. Cibles assignées : Château 2, Fort 7, Fort 9. Les complexes devront aussi être défendus. Prépare tes garnisons et coordonne la défense du bastion avec le reste de LUX.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Aujourd'hui :</strong> batailles au Bastion #2 et aux Forteresses #7 &amp; #9. Consulte le planning pour les horaires exacts.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Règles :</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Suis les instructions des R4 et rejoins leurs rallyes (Jessie).</li>
        <li style="margin-bottom:.4rem;">Après le rallye, envoie Patrick.</li>
        <li style="margin-bottom:.4rem;">Reste dans la Forteresse/le Bastion au moins 1 minute pour sauvegarder ta contribution.</li>
        <li>Aucune attaque solo ou lancement de rallye — attaquer sans ordre entraînera l'exclusion de l'alliance.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;">Merci pour ta participation !</p>`,
      migration_h3:"Migration de région",
      migration_body:"Informations et fenêtre de migration pour la région 4511 — détails à confirmer.",
      ratios_h3:"Ratios de troupes — Exploration Profonde",
      ratios_intro:'Ratio de troupes (Infanterie : Lancier : Tireur). Base standard <strong style="color:var(--ice);">50:20:30</strong> — à ajuster par zone comme ci-dessous :',
      zone_beast:"Grotte de la Bête", zone_gem:"Mine de Gemmes", zone_earth:"Noyau Terrestre", zone_hero:"Terre des Héros", zone_forge:"Forge d'Équipement", zone_lab:"Labo Souterrain",
      snow_h3:"Snow Busters — Consignes stratégiques",
      snow_body:`<p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Priorité équipement.</strong> Améliore d'abord le Manteau et les Gants ; ne passe aux autres équipements qu'une fois ceux-ci prioritaires.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Seuil d'arrêt.</strong> Une fois 95% du territoire déneigé, arrête le déneigement manuel et utilise la fusée (objet de déneigement instantané) pour finir le reste.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Efficacité du carburant.</strong> Chaque amélioration du fourneau étend automatiquement ton territoire. Évite de gaspiller du carburant en déneigeant en cercle autour du fourneau — avance plutôt en zigzag pour minimiser l'énergie perdue.</p>
      <p><strong style="color:var(--ice);">Ordre de déneigement.</strong> Trois types de neige nécessitent des quantités d'énergie différentes : blanche (la plus faible), bleue (modérée) et glace (la plus élevée). Dégage-les dans cet ordre — blanche, puis bleue, puis glace — car chaque amélioration de cheminée réduit le coût en énergie par case par la suite.</p>`,
      twin_h3:"Twin Stars — Astuces rapides",
      twin_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Équipe :</strong> forme une équipe avec des joueurs actifs. Les équipes incomplètes peuvent être remplies automatiquement, et l'équipe ne peut plus être modifiée une fois la sélection terminée.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Dés :</strong> les Dés Normaux avancent d'un nombre aléatoire de 1 à 6 cases. Garde les Dés de Cristal — ils permettent de choisir le nombre exact.</p>
      <p><strong style="color:var(--ice);">Stratégie :</strong> garde les Dés de Cristal jusqu'à être à 1-6 cases du Coffre d'Aventure ou d'une récompense de valeur, puis tombe pile dessus. Ne gaspille pas les Dés de Cristal sur des déplacements aléatoires !</p>`,
      guides_eyebrow:"Ressources", guides_title:"Guides &amp; astuces",
      guide1_h3:"Priorités de construction en début de jeu",
      guide1_body:"Concentre-toi sur le Fourneau, le Centre de Commandement et les bâtiments de ressources avant les casernes.",
      guide2_h3:"Optimiser tes héros",
      guide2_body:"Investis d'abord dans les héros qui correspondent à ton style de jeu (défense, économie ou exploration).",
      guide3_h3:"Se préparer pour un siège",
      guide3_body:"Renforce tes troupes de garnison et coordonne les horaires de connexion avec l'alliance avant l'événement.",
      codes_eyebrow:"Cadeaux", codes_title:"Codes cadeaux",
      codes_intro:"Utilise ces codes pour obtenir des récompenses gratuites en jeu. Les codes peuvent expirer à tout moment, utilise-les dès que possible.",
      codes_android:"Android", codes_android_steps:"Profil → Paramètres → Code cadeau → entrer le code",
      codes_ios:"iOS", codes_ios_steps:'Copie le code et ton ID joueur → va sur <a href="https://wos-giftcode.centurygame.com" style="color:var(--frost);" target="_blank" rel="noopener">wos-giftcode.centurygame.com</a> → saisis-les',
      footer_note:"Site non-officiel, réalisé par l'alliance"
    },

    es: {
      nav_alliance:"Alianza", nav_news:"Noticias", nav_leadership:"Liderazgo", nav_nap:"NAP", nav_events:"Eventos", nav_guides:"Guías", nav_codes:"Códigos",
      milestone_label:'Próximo hito de poder <strong>2B</strong>',
      milestone_remain:'— 90M restantes',
      hero_region_tag:"Región 4511",
      hero_sub:"Cuando el frío se lo llevó todo, <strong>LUX</strong> mantuvo la luz encendida. Una alianza internacional en la región 4511 de Whiteout Survival — disciplina, trabajo en equipo y un fuego que nunca se apaga.",
      scroll_cue:"Desplázate ↓",
      news_eyebrow:"Últimas noticias", news_title:"Noticias",
      news_status:"Aviso",
      news_h3:"Llegan los héroes de la Gen 2",
      news_body:`<p style="margin-bottom:.7rem;">Cada generación de héroes trae tres héroes nuevos — uno de Infantería, uno de Lancero y uno de Tirador. Cada generación incluye entre 5 y 6 Ruedas de la Suerte (una generación dura unos 80 días). Seguirás pudiendo elegir héroes anteriores también.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Flint</strong> llega a la rueda en tres días y algunas horas — un héroe de Infantería, e importante de conseguir. Es una mejora enorme respecto a Sergey.</p>
      <p style="margin-bottom:.7rem;">No hay una cantidad exacta de diamantes necesaria para conseguirlo, pero la rueda depende de la suerte más los hitos de tiradas específicos que garantizan fragmentos de héroe.</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">1 tirada: 1.500 diamantes — 10 tiradas: 13.500 diamantes.</li>
        <li style="margin-bottom:.4rem;">Usa la opción de 10 tiradas — sale más barata por tirada.</li>
        <li style="margin-bottom:.4rem;">Los hitos garantizados de cofres de fragmentos aparecerán en la rueda cuando el evento esté activo.</li>
        <li style="margin-bottom:.4rem;">El último hito está en 120 tiradas — no gires más allá de eso salvo que tengas muchísimos recursos. Llegar a 120 tiradas cuesta aproximadamente <strong style="color:var(--ice);">162.000 diamantes</strong>.</li>
        <li>El Día 2 del HOC da puntos para la rueda.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;margin-bottom:.9rem;"><strong style="color:var(--ice);">Nota:</strong> no uses fragmentos generales en héroes de la rueda.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Resumen:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.4rem;">Solo gira la rueda si tienes gemas suficientes para 70 o 120 tiradas totales por evento.</li>
        <li style="margin-bottom:.4rem;">Gira siempre de 10 en 10 para obtener el descuento.</li>
        <li style="margin-bottom:.4rem;">Tu objetivo es conseguir al menos 4 estrellas en el héroe.</li>
        <li style="margin-bottom:.4rem;">Nunca uses fragmentos generales en un héroe de rueda — es mejor guardarlos hasta tener ~475 y usarlos todos en un héroe fuera de rueda al inicio de una futura generación para llevarlo a 4 estrellas.</li>
        <li>Si participas en el HOC, usa también la rueda el Día 2.</li>
      </ul>`,
      about_eyebrow:"La alianza", about_title:"Sobre nosotros &amp; normas",
      about_p1:'<strong>LUX</strong> — "luz" en latín — reúne a jefes de la región 4511 que eligieron sobrevivir y crecer juntos en lugar de solos en la ventisca.',
      about_p2:"Valoramos el <strong>trabajo en equipo diario</strong> (ayuda en construcción, reparto de recursos) y la <strong>participación activa</strong> en los eventos de la alianza y la región.",
      about_rules:`<li><em>01</em> Mantente activo: se recomienda iniciar sesión a diario.</li>
        <li><em>02</em> Participa en los eventos de la alianza (asedio, guerra, migración).</li>
        <li><em>03</em> Respeto entre miembros — no se tolera la toxicidad.</li>
        <li><em>04</em> Avísanos si vas a estar ausente un tiempo.</li>
        <li><em>05</em> Contribuye regularmente a la investigación de la alianza.</li>`,
      stat_fullname:"Nombre completo", stat_region:"Región", stat_power:"Poder", stat_rank:"Rango del reino", stat_founded:"Fundada el", stat_language:"Idioma", stat_language_val:"Todos los idiomas", stat_members:"Miembros",
      roster_eyebrow:"Plantilla", roster_title:"Liderazgo",
      th_name:"Nombre", th_rank:"Rango", th_role:"Rol", role_leader:"Líder de la alianza",
      roster_note:"Liderazgo R5/R4 actualizado.",
      nap_eyebrow:"Diplomacia", nap_title:"Pacto de No Agresión (NAP)",
      nap_intro:"Pacto de no agresión negociado entre los R4/R5 de ambas alianzas. Todos los miembros deben seguir estas normas:",
      nap_list:`<li style="margin-bottom:.55rem;">Sin ataques a ciudades, concentraciones, cuartel general o banderas de miembros del NAP.</li>
      <li style="margin-bottom:.55rem;">Sin explorar ciudades ni casillas de recursos del NAP.</li>
      <li style="margin-bottom:.55rem;">Sin reclutar jugadores del NAP.</li>
      <li style="margin-bottom:.55rem;">Las violaciones se resuelven primero entre los R4/R5 de ambas alianzas.</li>
      <li style="margin-bottom:.55rem;">Las sanciones afectan solo al jugador, no a la alianza — 1ª: aviso, 2ª: degradación, 3ª: expulsión del NAP.</li>
      <li style="margin-bottom:.55rem;">Fortaleza / Instalación / Bastión: sin ataques a ciudades durante estas batallas; 1 fortaleza por alianza (según rango, verificado los domingos); el Bastión es solo para el Top 4 de alianzas; prohibido bloquear rutas o engullir instalaciones de bandera.</li>
      <li style="margin-bottom:.55rem;">Una sola cuenta granja/academia por alianza.</li>
      <li style="margin-bottom:.55rem;">Prohibido quitarse el tag para atacar a una alianza del Top 10 y esquivar el NAP.</li>
      <li style="margin-bottom:.55rem;">Las reglas PvP de eventos prevalecen sobre el NAP durante SvS, Bear Invasion Alliance, Brothers Battle, etc.</li>
      <li>Respeto, cooperación y juego limpio en todo momento.</li>`,
      events_eyebrow:"En curso", events_title:"Eventos",
      status_signup:"Inscripciones abiertas", status_guidelines:"Directrices", status_upcoming:"Próximamente", status_reference:"Referencia",
      champ_h3:"Campeonato de la alianza",
      champ_body:`<p style="margin-bottom:.7rem;">Aunque no puedas luchar, igualmente recibes recompensas solo por inscribirte — no olvides registrarte.</p>
      <ol style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.5rem;">Envía tus 3 héroes más fuertes.</li>
        <li style="margin-bottom:.5rem;">Para la distribución de tropas, intenta respetar en lo posible un ratio Infantería : Lancero : Tirador de 5:2:3.</li>
        <li>Habrá un período de ajuste de líneas tras la inscripción — para facilitarlo, regístrate en la línea del medio.</li>
      </ol>`,
      bear_h3:"Bear Traps — Estrategia de concentración",
      bear_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Lanza una concentración</strong> con tus mejores héroes — nada de Gina, nada de héroes azules. Iguala tus tropas para poder unirte al mayor número posible de puntos de concentración.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Luego únete a las demás concentraciones</strong> lideradas con:</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Jessie + otro + otro (equilibra)</li>
        <li style="margin-bottom:.4rem;">Jaser + otro + otro (equilibra)</li>
        <li style="margin-bottom:.4rem;">Seo Yoon + otro + otro (equilibra)</li>
        <li>También puedes unirte sin héroe.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;"><strong style="color:var(--ice);">Atención:</strong> un héroe malo afecta a toda la concentración.</p>`,
      weapon_h3:"Evento Fábrica de Armas",
      weapon_body:`Las inscripciones cierran hoy.<br>
      Escuadrón 1 — UTC 14:00<br>
      Escuadrón 2 — UTC 19:00<br><br>
      No olvides inscribirte con antelación. Faltar a dos inscripciones sin motivo válido hará que te retiren de la participación — inscríbete solo si de verdad puedes asistir.<br><br>
      <strong style="color:var(--ice);">Nota:</strong> votar por una franja horaria <em style="font-style:italic;color:var(--frost);">no</em> es lo mismo que inscribirse. Debes entrar en el escuadrón que votaste y marcar "participar".`,
      siege_h3:"Asedio de la alianza",
      siege_body:`<p style="margin-bottom:.8rem;">Se acercan dos eventos de asedio — <strong style="color:var(--ice);">Bastion Fort</strong> y <strong style="color:var(--ice);">Solar Castle</strong>. Objetivos asignados: Castillo 2, Fuerte 7, Fuerte 9. Los complejos también necesitarán defensa. Prepara tus guarniciones y coordina la defensa del bastión con el resto de LUX.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Hoy:</strong> batallas en el Bastión #2 y en los Fuertes #7 &amp; #9. Consulta el calendario para los horarios exactos.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Normas:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Sigue las instrucciones de los R4 y únete a sus concentraciones (Jessie).</li>
        <li style="margin-bottom:.4rem;">Después de la concentración, envía a Patrick.</li>
        <li style="margin-bottom:.4rem;">Permanece en la Fortaleza/Bastión al menos 1 minuto para guardar tu contribución.</li>
        <li>Nada de ataques en solitario ni de iniciar concentraciones — atacar sin órdenes supondrá la expulsión de la alianza.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;">¡Gracias por tu participación!</p>`,
      migration_h3:"Migración de región",
      migration_body:"Información y ventana de migración para la región 4511 — detalles por confirmar.",
      ratios_h3:"Ratios de tropas — Exploración Profunda",
      ratios_intro:'Ratio de tropas (Infantería : Lancero : Tirador). Base estándar <strong style="color:var(--ice);">50:20:30</strong> — ajusta por zona como se indica:',
      zone_beast:"Cueva de la Bestia", zone_gem:"Mina de Gemas", zone_earth:"Núcleo Terrestre", zone_hero:"Tierra de Héroes", zone_forge:"Forja de Equipo", zone_lab:"Laboratorio Subterráneo",
      snow_h3:"Snow Busters — Directrices de estrategia",
      snow_body:`<p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Prioridad de equipo.</strong> Mejora primero el Abrigo y los Guantes; solo pasa a otro equipo una vez que estos sean prioritarios.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Umbral de parada.</strong> Cuando el despeje del territorio llegue al 95%, deja de despejar nieve manualmente y usa el cohete (objeto de despeje instantáneo) para terminar el resto.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Eficiencia de combustible.</strong> Cada mejora del horno expande automáticamente tu territorio. Evita desperdiciar combustible despejando casillas en círculo alrededor del horno — avanza en zigzag para minimizar la energía desperdiciada.</p>
      <p><strong style="color:var(--ice);">Orden de despeje.</strong> Los tres tipos de nieve requieren cantidades de energía distintas: blanca (la más baja), azul (moderada) y hielo (la más alta). Despéjalas en ese orden — blanca, luego azul, luego hielo — ya que cada mejora de la chimenea reduce el coste de energía por casilla en adelante.</p>`,
      twin_h3:"Twin Stars — Consejos rápidos",
      twin_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Equipo:</strong> forma equipo con jugadores activos. Los equipos incompletos pueden rellenarse automáticamente, y el equipo no puede cambiarse una vez terminada la selección.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Dados:</strong> los Dados Normales avanzan un número aleatorio de 1 a 6 casillas. Guarda los Dados de Cristal — te permiten elegir el número exacto.</p>
      <p><strong style="color:var(--ice);">Estrategia:</strong> guarda los Dados de Cristal hasta estar a 1-6 casillas del Cofre de Aventura o de una recompensa valiosa, y cae exactamente ahí. ¡No malgastes los Dados de Cristal en movimientos aleatorios!</p>`,
      guides_eyebrow:"Recursos", guides_title:"Guías &amp; consejos",
      guide1_h3:"Prioridades de construcción al inicio",
      guide1_body:"Céntrate en el Horno, el Centro de Mando y los edificios de recursos antes que los cuarteles.",
      guide2_h3:"Optimizar tus héroes",
      guide2_body:"Invierte primero en héroes que encajen con tu estilo de juego (defensa, economía o exploración).",
      guide3_h3:"Prepararse para un asedio",
      guide3_body:"Refuerza tus tropas de guarnición y coordina los horarios de conexión con la alianza antes del evento.",
      codes_eyebrow:"Regalos", codes_title:"Códigos de regalo",
      codes_intro:"Canjea estos códigos por recompensas gratuitas en el juego. Los códigos pueden caducar en cualquier momento, así que úsalos cuanto antes.",
      codes_android:"Android", codes_android_steps:"Perfil → Ajustes → Código de regalo → introducir código",
      codes_ios:"iOS", codes_ios_steps:'Copia el código y tu ID de jugador → ve a <a href="https://wos-giftcode.centurygame.com" style="color:var(--frost);" target="_blank" rel="noopener">wos-giftcode.centurygame.com</a> → introdúcelos',
      footer_note:"Sitio no oficial, creado por la alianza"
    },

    it: {
      nav_alliance:"Alleanza", nav_news:"Notizie", nav_leadership:"Leadership", nav_nap:"NAP", nav_events:"Eventi", nav_guides:"Guide", nav_codes:"Codici",
      milestone_label:'Prossimo traguardo di potenza <strong>2B</strong>',
      milestone_remain:'— 90M mancanti',
      hero_region_tag:"Regione 4511",
      hero_sub:"Quando il freddo ha portato via tutto, <strong>LUX</strong> ha tenuto accesa la luce. Un'alleanza internazionale nella regione 4511 su Whiteout Survival — disciplina, lavoro di squadra e un fuoco che non si spegne mai.",
      scroll_cue:"Scorri ↓",
      news_eyebrow:"Ultime notizie", news_title:"Notizie",
      news_status:"Attenzione",
      news_h3:"Arrivano gli eroi Gen 2",
      news_body:`<p style="margin-bottom:.7rem;">Ogni generazione di eroi porta tre nuovi eroi — uno di Fanteria, uno Lanciere e uno Tiratore. Ogni generazione include 5-6 Ruote della Fortuna (una generazione dura circa 80 giorni). Potrai comunque scegliere anche gli eroi precedenti.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Flint</strong> arriva sulla ruota tra tre giorni e alcune ore — un eroe di Fanteria, e importante da ottenere. È un enorme miglioramento rispetto a Sergey.</p>
      <p style="margin-bottom:.7rem;">Non esiste un numero esatto di diamanti necessari per ottenerlo, ma la ruota dipende dalla fortuna più i traguardi di estrazione specifici che garantiscono frammenti eroe.</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">1 estrazione: 1.500 diamanti — 10 estrazioni: 13.500 diamanti.</li>
        <li style="margin-bottom:.4rem;">Usa l'opzione da 10 estrazioni — costa meno per estrazione.</li>
        <li style="margin-bottom:.4rem;">I traguardi garantiti dei forzieri di frammenti appariranno sulla ruota una volta avviato l'evento.</li>
        <li style="margin-bottom:.4rem;">L'ultimo traguardo è a 120 estrazioni — non andare oltre a meno che tu non abbia moltissime risorse. Raggiungere 120 estrazioni costa circa <strong style="color:var(--ice);">162.000 diamanti</strong>.</li>
        <li>Il Giorno 2 dell'HOC dà punti per la ruota.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;margin-bottom:.9rem;"><strong style="color:var(--ice);">Nota:</strong> non usare i frammenti generici sugli eroi della ruota.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Riepilogo:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.4rem;">Gira la ruota solo se hai abbastanza gemme per 70 o 120 estrazioni totali per evento.</li>
        <li style="margin-bottom:.4rem;">Fai sempre estrazioni da 10x per ottenere lo sconto.</li>
        <li style="margin-bottom:.4rem;">Il tuo obiettivo è arrivare ad almeno 4 stelle sull'eroe.</li>
        <li style="margin-bottom:.4rem;">Non usare mai i frammenti generici su un eroe da ruota — meglio conservarli fino ad averne ~475, poi usarli tutti su un eroe non da ruota all'inizio di una futura generazione per portarlo a 4 stelle.</li>
        <li>Se partecipi all'HOC, usa la ruota anche il Giorno 2.</li>
      </ul>`,
      about_eyebrow:"L'alleanza", about_title:"Chi siamo &amp; regole",
      about_p1:'<strong>LUX</strong> — "luce" in latino — riunisce capi della regione 4511 che hanno scelto di sopravvivere e crescere insieme invece che da soli nella bufera.',
      about_p2:"Diamo valore al <strong>lavoro di squadra quotidiano</strong> (aiuto nelle costruzioni, condivisione delle risorse) e alla <strong>partecipazione attiva</strong> agli eventi dell'alleanza e della regione.",
      about_rules:`<li><em>01</em> Resta attivo: accesso giornaliero consigliato.</li>
        <li><em>02</em> Partecipa agli eventi dell'alleanza (assedio, guerra, migrazione).</li>
        <li><em>03</em> Rispetto tra membri — nessuna tossicità tollerata.</li>
        <li><em>04</em> Avvisaci se ti assenterai per un po'.</li>
        <li><em>05</em> Contribuisci regolarmente alla ricerca dell'alleanza.</li>`,
      stat_fullname:"Nome completo", stat_region:"Regione", stat_power:"Potenza", stat_rank:"Rango nel regno", stat_founded:"Fondata il", stat_language:"Lingua", stat_language_val:"Tutte le lingue", stat_members:"Membri",
      roster_eyebrow:"Effettivi", roster_title:"Leadership",
      th_name:"Nome", th_rank:"Rango", th_role:"Ruolo", role_leader:"Capo alleanza",
      roster_note:"Leadership R5/R4 aggiornata.",
      nap_eyebrow:"Diplomazia", nap_title:"Patto di non aggressione (NAP)",
      nap_intro:"Patto di non aggressione negoziato tra gli R4/R5 di entrambe le alleanze. Tutti i membri devono rispettare queste regole:",
      nap_list:`<li style="margin-bottom:.55rem;">Nessun attacco a città, raduni, quartier generale o bandiere dei membri del NAP.</li>
      <li style="margin-bottom:.55rem;">Nessuna ricognizione di città o caselle risorse del NAP.</li>
      <li style="margin-bottom:.55rem;">Nessun adescamento di giocatori del NAP.</li>
      <li style="margin-bottom:.55rem;">Le violazioni vengono risolte prima tra gli R4/R5 di entrambe le alleanze.</li>
      <li style="margin-bottom:.55rem;">Le sanzioni colpiscono solo il giocatore, non l'alleanza — 1°: avviso, 2°: retrocessione, 3°: bandito dal NAP.</li>
      <li style="margin-bottom:.55rem;">Fortezza / Struttura / Roccaforte: nessun attacco alle città durante queste battaglie; 1 fortezza per alleanza (in base al rango, controllato la domenica); la Roccaforte è riservata alle Top 4 alleanze; vietato bloccare i percorsi o inglobare le strutture bandiera.</li>
      <li style="margin-bottom:.55rem;">Un solo account fattoria/accademia per alleanza.</li>
      <li style="margin-bottom:.55rem;">Vietato togliersi il tag per colpire un'alleanza Top 10 aggirando il NAP.</li>
      <li style="margin-bottom:.55rem;">Le regole PvP degli eventi hanno la precedenza sul NAP durante SvS, Bear Invasion Alliance, Brothers Battle, ecc.</li>
      <li>Rispetto, cooperazione e fair play in ogni momento.</li>`,
      events_eyebrow:"In corso", events_title:"Eventi",
      status_signup:"Iscrizioni aperte", status_guidelines:"Linee guida", status_upcoming:"In arrivo", status_reference:"Riferimento",
      champ_h3:"Campionato dell'alleanza",
      champ_body:`<p style="margin-bottom:.7rem;">Anche se non puoi combattere, ricevi comunque delle ricompense solo per esserti iscritto — non dimenticare di registrarti.</p>
      <ol style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.5rem;">Invia i tuoi 3 eroi più forti.</li>
        <li style="margin-bottom:.5rem;">Per la distribuzione delle truppe, cerca di rispettare il più possibile un rapporto Fanteria : Lanciere : Tiratore di 5:2:3.</li>
        <li>Ci sarà un periodo di aggiustamento delle linee dopo l'iscrizione — per semplificare, registrati sulla linea centrale.</li>
      </ol>`,
      bear_h3:"Bear Traps — Strategia di raduno",
      bear_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Avvia un raduno</strong> con i tuoi eroi migliori — niente Gina, niente eroi blu. Equalizza le tue truppe per poter unirti al maggior numero possibile di punti di raduno.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Poi unisciti agli altri raduni</strong> guidati con:</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Jessie + un altro + un altro (equalizza)</li>
        <li style="margin-bottom:.4rem;">Jaser + un altro + un altro (equalizza)</li>
        <li style="margin-bottom:.4rem;">Seo Yoon + un altro + un altro (equalizza)</li>
        <li>Puoi unirti anche senza eroe.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;"><strong style="color:var(--ice);">Attenzione:</strong> un eroe scadente influisce sull'intero raduno.</p>`,
      weapon_h3:"Evento Fabbrica di Armi",
      weapon_body:`Le iscrizioni chiudono oggi.<br>
      Squadra 1 — UTC 14:00<br>
      Squadra 2 — UTC 19:00<br><br>
      Non dimenticare di iscriverti in anticipo. Saltare due iscrizioni senza un motivo valido comporterà l'esclusione dalla partecipazione — iscriviti solo se puoi davvero essere presente.<br><br>
      <strong style="color:var(--ice);">Nota:</strong> votare per una fascia oraria <em style="font-style:italic;color:var(--frost);">non</em> equivale a iscriversi. Devi entrare nella squadra per cui hai votato e spuntare "partecipa".`,
      siege_h3:"Assedio dell'alleanza",
      siege_body:`<p style="margin-bottom:.8rem;">In arrivo due eventi d'assedio — <strong style="color:var(--ice);">Bastion Fort</strong> e <strong style="color:var(--ice);">Solar Castle</strong>. Obiettivi assegnati: Castello 2, Forte 7, Forte 9. Anche i complessi dovranno essere difesi. Prepara le tue guarnigioni e coordina la difesa del bastione con il resto di LUX.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Oggi:</strong> battaglie al Bastione #2 e ai Forti #7 &amp; #9. Controlla il calendario per gli orari esatti.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Regole:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Segui le istruzioni degli R4 e unisciti ai loro raduni (Jessie).</li>
        <li style="margin-bottom:.4rem;">Dopo il raduno, invia Patrick.</li>
        <li style="margin-bottom:.4rem;">Resta nella Fortezza/Roccaforte per almeno 1 minuto per salvare il tuo contributo.</li>
        <li>Nessun attacco in solitaria o avvio di raduni — attaccare senza ordini comporterà l'espulsione dall'alleanza.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;">Grazie per la tua partecipazione!</p>`,
      migration_h3:"Migrazione di regione",
      migration_body:"Informazioni e finestra di migrazione per la regione 4511 — dettagli da confermare.",
      ratios_h3:"Rapporti truppe — Esplorazione Profonda",
      ratios_intro:'Rapporto truppe (Fanteria : Lanciere : Tiratore). Base standard <strong style="color:var(--ice);">50:20:30</strong> — da adattare per zona come segue:',
      zone_beast:"Caverna della Bestia", zone_gem:"Miniera di Gemme", zone_earth:"Nucleo Terrestre", zone_hero:"Terra degli Eroi", zone_forge:"Forgia dell'Equipaggiamento", zone_lab:"Laboratorio Sotterraneo",
      snow_h3:"Snow Busters — Linee guida strategiche",
      snow_body:`<p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Priorità equipaggiamento.</strong> Migliora prima Cappotto e Guanti; passa agli altri equipaggiamenti solo dopo aver dato priorità a questi.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Soglia di arresto.</strong> Una volta raggiunto il 95% di territorio liberato, smetti di rimuovere la neve manualmente e usa il razzo (oggetto di rimozione istantanea) per completare il resto.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Efficienza del carburante.</strong> Ogni miglioramento della fornace espande automaticamente il tuo territorio. Evita di sprecare carburante liberando le caselle in cerchio intorno alla fornace — avanza invece a zigzag per minimizzare l'energia sprecata.</p>
      <p><strong style="color:var(--ice);">Ordine di rimozione.</strong> Tre tipi di neve richiedono quantità di energia diverse: bianca (la più bassa), blu (moderata) e ghiaccio (la più alta). Rimuovile in quest'ordine — bianca, poi blu, poi ghiaccio — poiché ogni miglioramento del focolare riduce il costo energetico per casella da quel momento in poi.</p>`,
      twin_h3:"Twin Stars — Consigli rapidi",
      twin_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Squadra:</strong> forma una squadra con giocatori attivi. Le squadre incomplete possono essere riempite automaticamente, e la squadra non può più essere cambiata dopo la fine della selezione.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Dadi:</strong> i Dadi Normali avanzano di un numero casuale da 1 a 6 caselle. Conserva i Dadi di Cristallo — permettono di scegliere il numero esatto.</p>
      <p><strong style="color:var(--ice);">Strategia:</strong> conserva i Dadi di Cristallo finché non sei a 1-6 caselle dal Forziere dell'Avventura o da una ricompensa di valore, poi atterraci esattamente sopra. Non sprecare i Dadi di Cristallo su spostamenti casuali!</p>`,
      guides_eyebrow:"Risorse", guides_title:"Guide &amp; consigli",
      guide1_h3:"Priorità di costruzione a inizio partita",
      guide1_body:"Concentrati su Fornace, Centro di Comando ed edifici delle risorse prima delle caserme.",
      guide2_h3:"Ottimizzare i tuoi eroi",
      guide2_body:"Investi prima negli eroi adatti al tuo stile di gioco (difesa, economia o esplorazione).",
      guide3_h3:"Prepararsi a un assedio",
      guide3_body:"Rafforza le truppe di guarnigione e coordina gli orari di accesso con l'alleanza prima dell'evento.",
      codes_eyebrow:"Omaggi", codes_title:"Codici regalo",
      codes_intro:"Riscatta questi codici per ricompense gratuite in-game. I codici possono scadere in qualsiasi momento, usali il prima possibile.",
      codes_android:"Android", codes_android_steps:"Profilo → Impostazioni → Codice regalo → inserisci il codice",
      codes_ios:"iOS", codes_ios_steps:'Copia il codice e il tuo ID giocatore → vai su <a href="https://wos-giftcode.centurygame.com" style="color:var(--frost);" target="_blank" rel="noopener">wos-giftcode.centurygame.com</a> → inseriscili',
      footer_note:"Sito non ufficiale, realizzato dall'alleanza"
    },

    ko: {
      nav_alliance:"연맹", nav_news:"소식", nav_leadership:"지도부", nav_nap:"불가침조약", nav_events:"이벤트", nav_guides:"가이드", nav_codes:"코드",
      milestone_label:'다음 전투력 목표 <strong>2B</strong>',
      milestone_remain:'— 잔액: 9천만,
      hero_region_tag:"4511 서버",
      hero_sub:"추위가 모든 것을 앗아갔을 때, <strong>LUX</strong>는 불빛을 지켰습니다. Whiteout Survival 4511 서버의 국제 연맹 — 규율, 팀워크, 그리고 절대 꺼지지 않는 불꽃.",
      scroll_cue:"스크롤 ↓",
      news_eyebrow:"최신 소식", news_title:"소식",
      news_status:"공지",
      news_h3:"2세대 영웅 출시 예정",
      news_body:`<p style="margin-bottom:.7rem;">영웅 세대마다 새로운 영웅 3명이 추가됩니다 — 보병 1명, 창병 1명, 사수 1명. 각 세대는 5~6개의 행운의 룰렛을 포함하며 (한 세대는 약 80일간 지속됩니다). 이전 영웅도 계속 선택할 수 있습니다.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">플린트(Flint)</strong>가 3일 하고도 몇 시간 후 룰렛에 등장합니다 — 보병 영웅이며 꼭 얻어야 할 중요한 영웅입니다. 세르게이(Sergey)보다 크게 강화된 영웅입니다.</p>
      <p style="margin-bottom:.7rem;">정확히 필요한 다이아몬드 수는 없지만, 룰렛은 운과 함께 영웅 조각을 보장하는 특정 회전 구간에 달려 있습니다.</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">1회 회전: 1,500 다이아몬드 — 10회 회전: 13,500 다이아몬드.</li>
        <li style="margin-bottom:.4rem;">10회 회전 옵션을 사용하세요 — 회전당 더 저렴합니다.</li>
        <li style="margin-bottom:.4rem;">보장된 조각 상자 구간은 이벤트가 시작되면 룰렛에 표시됩니다.</li>
        <li style="margin-bottom:.4rem;">마지막 구간은 120회 회전입니다 — 자원이 정말 넉넉하지 않다면 그 이상은 돌리지 마세요. 120회 회전에 도달하려면 약 <strong style="color:var(--ice);">162,000 다이아몬드</strong>가 필요합니다.</li>
        <li>HOC 2일차는 룰렛 포인트를 제공합니다.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;margin-bottom:.9rem;"><strong style="color:var(--ice);">참고:</strong> 룰렛 영웅에게는 일반 조각을 사용하지 마세요.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">요약:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.4rem;">이벤트당 총 70회 또는 120회 회전에 충분한 보석이 있을 때만 룰렛을 돌리세요.</li>
        <li style="margin-bottom:.4rem;">할인을 받으려면 항상 10회씩 회전하세요.</li>
        <li style="margin-bottom:.4rem;">목표는 영웅을 최소 4성으로 만드는 것입니다.</li>
        <li style="margin-bottom:.4rem;">일반 조각을 룰렛 영웅에게 절대 사용하지 마세요 — 약 475개가 모일 때까지 모아두었다가, 다음 세대 시작 시 룰렛 외 영웅에게 전부 사용해 4성으로 만드는 것이 좋습니다.</li>
        <li>HOC에 참여한다면 2일차에도 룰렛을 사용하세요.</li>
      </ul>`,
      about_eyebrow:"연맹 소개", about_title:"소개 &amp; 규칙",
      about_p1:'<strong>LUX</strong> — 라틴어로 "빛"을 의미하며, 눈보라 속에서 혼자가 아니라 함께 생존하고 성장하기로 한 4511 서버의 영주들을 모았습니다.',
      about_p2:"우리는 <strong>매일의 협력</strong>(건설 지원, 자원 공유)과 연맹 및 서버 이벤트에 대한 <strong>적극적인 참여</strong>를 중요하게 생각합니다.",
      about_rules:`<li><em>01</em> 활동 유지: 매일 접속을 권장합니다.</li>
        <li><em>02</em> 연맹 이벤트(공성전, 전쟁, 서버 이동)에 참여하세요.</li>
        <li><em>03</em> 멤버 간 존중 — 어떠한 무례함도 용납되지 않습니다.</li>
        <li><em>04</em> 한동안 자리를 비운다면 미리 알려주세요.</li>
        <li><em>05</em> 연맹 연구에 꾸준히 기여하세요.</li>`,
      stat_fullname:"정식 명칭", stat_region:"서버", stat_power:"전투력", stat_rank:"왕국 순위", stat_founded:"창설일", stat_language:"언어", stat_language_val:"모든 언어", stat_members:"멤버",
      roster_eyebrow:"명단", roster_title:"지도부",
      th_name:"이름", th_rank:"등급", th_role:"역할", role_leader:"연맹장",
      roster_note:"R5/R4 지도부 최신 상태.",
      nap_eyebrow:"외교", nap_title:"불가침 조약 (NAP)",
      nap_intro:"양측 연맹의 R4/R5 간에 협상된 불가침 조약입니다. 모든 멤버는 다음 규칙을 지켜야 합니다:",
      nap_list:`<li style="margin-bottom:.55rem;">NAP 멤버의 도시, 집결, 본부, 깃발에 대한 공격 금지.</li>
      <li style="margin-bottom:.55rem;">NAP 도시나 자원 타일 정찰 금지.</li>
      <li style="margin-bottom:.55rem;">NAP 플레이어 스카우트 금지.</li>
      <li style="margin-bottom:.55rem;">위반 사항은 먼저 양측 연맹의 R4/R5 간에 해결합니다.</li>
      <li style="margin-bottom:.55rem;">제재는 연맹이 아닌 해당 플레이어에게만 적용됩니다 — 1차: 경고, 2차: 강등, 3차: NAP에서 제외.</li>
      <li style="margin-bottom:.55rem;">요새 / 시설 / 거점: 해당 전투 중에는 도시 공격 금지; 연맹당 요새 1개(순위에 따라 일요일마다 확인); 거점은 상위 4개 연맹만 가능; 경로 차단이나 깃발 시설 잠식 금지.</li>
      <li style="margin-bottom:.55rem;">연맹당 파밍/육성 계정 1개만 허용.</li>
      <li style="margin-bottom:.55rem;">NAP를 피하기 위해 태그를 떼고 상위 10위 연맹을 공격하는 행위 금지.</li>
      <li style="margin-bottom:.55rem;">SvS, Bear Invasion Alliance, Brothers Battle 등의 이벤트 PvP 규칙은 NAP보다 우선합니다.</li>
      <li>항상 존중, 협력, 페어플레이를 지켜주세요.</li>`,
      events_eyebrow:"진행 중", events_title:"이벤트",
      status_signup:"신청 접수 중", status_guidelines:"안내사항", status_upcoming:"예정", status_reference:"참고자료",
      champ_h3:"연맹 챔피언십",
      champ_body:`<p style="margin-bottom:.7rem;">전투에 참여하지 못하더라도 신청만으로도 보상을 받을 수 있습니다 — 등록을 잊지 마세요.</p>
      <ol style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.5rem;">가장 강한 영웅 3명을 보내세요.</li>
        <li style="margin-bottom:.5rem;">병력 배분은 보병 : 창병 : 사수 비율을 5:2:3에 최대한 가깝게 맞춰보세요.</li>
        <li>신청 후 라인 조정 기간이 있습니다 — 원활한 진행을 위해 가운데 라인에 등록해 주세요.</li>
      </ol>`,
      bear_h3:"곰 함정 — 집결 전략",
      bear_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">최고의 영웅으로 집결을 시작하세요</strong> — Gina 및 블루 영웅은 제외. 최대한 많은 집결 지점에 합류할 수 있도록 병력을 균등하게 조정하세요.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">그 다음 아래 영웅이 이끄는 다른 집결에 합류하세요:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Jessie + 다른 영웅 + 다른 영웅 (균등화)</li>
        <li style="margin-bottom:.4rem;">Jaser + 다른 영웅 + 다른 영웅 (균등화)</li>
        <li style="margin-bottom:.4rem;">Seo Yoon + 다른 영웅 + 다른 영웅 (균등화)</li>
        <li>영웅 없이도 합류할 수 있습니다.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;"><strong style="color:var(--ice);">주의:</strong>부적합한 영웅은 전체 집결에 영향을 줍니다.</p>`,
      weapon_h3:"무기 공장 이벤트",
      weapon_body:`신청은 오늘 마감됩니다.<br>
      1분대 — UTC 14:00<br>
      2분대 — UTC 19:00<br><br>
      미리 신청하는 것을 잊지 마세요. 정당한 사유 없이 두 번 신청을 놓치면 참여에서 제외됩니다 — 실제로 참여 가능할 때만 신청해 주세요.<br><br>
      <strong style="color:var(--ice);">참고:</strong> 시간대에 투표하는 것은 신청과 <em style="font-style:italic;color:var(--frost);">다릅니다</em>. 투표한 분대에 들어가서 "참여" 체크를 해야 합니다.`,
      siege_h3:"연맹 공성전",
      siege_body:`<p style="margin-bottom:.8rem;">두 개의 공성전 이벤트가 예정되어 있습니다 — <strong style="color:var(--ice);">Bastion Fort</strong>와 <strong style="color:var(--ice);">Solar Castle</strong>. 배정된 목표: 성 2, 요새 7, 요새 9. 콤플렉스도 방어가 필요합니다. 주둔군을 준비하고 LUX 나머지 인원과 거점 방어를 조율하세요.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">오늘:</strong> 거점 #2 및 요새 #7 &amp; #9 전투. 정확한 전투 시간은 일정을 확인하세요.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">규칙:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">R4의 지시를 따르고 그들의 집결(Jessie)에 합류하세요.</li>
        <li style="margin-bottom:.4rem;">집결 후 Patrick을 보내세요.</li>
        <li style="margin-bottom:.4rem;">기여도를 저장하려면 요새/거점에 최소 1분간 머무르세요.</li>
        <li>단독 공격이나 집결 시작 금지 — 명령 없이 공격 시 연맹에서 제외됩니다.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;">참여해 주셔서 감사합니다!</p>`,
      migration_h3:"서버 이동",
      migration_body:"4511 서버 이동 정보 및 기간 — 세부사항 확정 예정.",
      ratios_h3:"심층 탐사 병력 비율",
      ratios_intro:'병력 비율 (보병 : 창병 : 사수). 표준 기준 <strong style="color:var(--ice);">50:20:30</strong> — 아래와 같이 구역별로 조정하세요:',
      zone_beast:"야수 동굴", zone_gem:"보석 광산", zone_earth:"지구의 핵", zone_hero:"영웅의 땅", zone_forge:"장비 대장간", zone_lab:"지하 연구소",
      snow_h3:"눈 치우기 대작전 — 전략 가이드",
      snow_body:`<p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">장비 우선순위.</strong> 코트와 장갑을 먼저 강화하세요. 이것들이 우선순위가 된 후에만 다른 장비로 넘어가세요.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">중단 기준.</strong> 영토 정리가 95%에 도달하면 수동 제설을 멈추고 로켓(즉시 제거 아이템)을 사용해 나머지를 완료하세요.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">연료 효율.</strong> 용광로를 업그레이드할 때마다 영토가 자동으로 확장됩니다. 용광로 주변을 원형으로 제설하며 연료를 낭비하지 말고, 지그재그 패턴으로 진행해 낭비되는 에너지를 최소화하세요.</p>
      <p><strong style="color:var(--ice);">제설 순서.</strong> 세 가지 눈 종류는 서로 다른 에너지량을 필요로 합니다: 흰색(가장 낮음), 파란색(보통), 얼음(가장 높음). 벽난로를 업그레이드할 때마다 이후 타일당 에너지 비용이 줄어드므로, 흰색 → 파란색 → 얼음 순서로 치우세요.</p>`,
      twin_h3:"쌍둥이 별 — 빠른 팁",
      twin_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">팀:</strong> 활동적인 플레이어와 팀을 구성하세요. 불완전한 팀은 자동으로 채워질 수 있으며, 선택이 종료된 후에는 팀을 변경할 수 없습니다.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">주사위:</strong> 일반 주사위는 무작위로 1~6칸 이동합니다. 크리스탈 주사위를 아껴두세요 — 정확한 숫자를 선택할 수 있습니다.</p>
      <p><strong style="color:var(--ice);">전략:</strong> 크리스탈 주사위는 모험 상자나 값진 보상에서 1~6칸 남았을 때까지 아껴두었다가 정확히 그 칸에 착지하세요. 무작위 이동에 크리스탈 주사위를 낭비하지 마세요!</p>`,
      guides_eyebrow:"자료실", guides_title:"가이드 &amp; 팁",
      guide1_h3:"초반 건설 우선순위",
      guide1_body:"병영보다 먼저 용광로, 지휘 센터, 자원 건물에 집중하세요.",
      guide2_h3:"영웅 최적화하기",
      guide2_body:"자신의 플레이 스타일(방어, 경제, 탐사)에 맞는 영웅에 먼저 투자하세요.",
      guide3_h3:"공성전 준비하기",
      guide3_body:"주둔군 병력을 강화하고 이벤트 전에 연맹과 접속 시간을 조율하세요.",
      codes_eyebrow:"무료 혜택", codes_title:"기프트 코드",
      codes_intro:"이 코드를 사용해 게임 내 무료 보상을 받으세요. 코드는 언제든지 만료될 수 있으니 가능한 한 빨리 사용하세요.",
      codes_android:"안드로이드", codes_android_steps:"프로필 → 설정 → 기프트 코드 → 코드 입력",
      codes_ios:"iOS", codes_ios_steps:'코드와 플레이어 ID를 복사 → <a href="https://wos-giftcode.centurygame.com" style="color:var(--frost);" target="_blank" rel="noopener">wos-giftcode.centurygame.com</a>으로 이동 → 입력',
      footer_note:"비공식 사이트, 연맹에서 제작"
    },

    ar: {
      nav_alliance:"التحالف", nav_news:"الأخبار", nav_leadership:"القيادة", nav_nap:"اتفاقية عدم الاعتداء", nav_events:"الفعاليات", nav_guides:"الأدلة", nav_codes:"الأكواد",
      milestone_label:'الهدف التالي للقوة <strong>2B</strong>',
      milestone_remain:'— يتبقى 90M',
      hero_region_tag:"المنطقة 4511",
      hero_sub:"عندما أخذ البرد كل شيء، حافظ <strong>LUX</strong> على النور مشتعلاً. تحالف دولي في المنطقة 4511 على Whiteout Survival — انضباط، وعمل جماعي، ولهب لا ينطفئ أبداً.",
      scroll_cue:"مرر للأسفل ↓",
      news_eyebrow:"آخر الأخبار", news_title:"الأخبار",
      news_status:"تنبيه",
      news_h3:"أبطال الجيل الثاني قادمون",
      news_body:`<p style="margin-bottom:.7rem;">كل جيل من الأبطال يجلب ثلاثة أبطال جدد — بطل مشاة، بطل رماح، وبطل رماية. يتضمن كل جيل 5 إلى 6 عجلات حظ (يستمر الجيل حوالي 80 يوماً). سيظل بإمكانك اختيار الأبطال السابقين أيضاً.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">فلينت (Flint)</strong> سيصل إلى العجلة خلال ثلاثة أيام وبضع ساعات — بطل مشاة، ومهم جداً الحصول عليه. إنه ترقية ضخمة مقارنة بسيرجي (Sergey).</p>
      <p style="margin-bottom:.7rem;">لا يوجد عدد محدد من الألماس مطلوب للحصول عليه، لكن العجلة تعتمد على الحظ بالإضافة إلى محطات دوران معينة تضمن حصولك على شظايا البطل.</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-right:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">دورة واحدة: 1,500 ألماسة — 10 دورات: 13,500 ألماسة.</li>
        <li style="margin-bottom:.4rem;">استخدم خيار الـ10 دورات — فهو أرخص لكل دورة.</li>
        <li style="margin-bottom:.4rem;">ستظهر محطات صناديق الشظايا المضمونة على العجلة بمجرد بدء الفعالية.</li>
        <li style="margin-bottom:.4rem;">المحطة الأخيرة عند 120 دورة — لا تتجاوزها إلا إذا كان لديك موارد كثيرة جداً. الوصول إلى 120 دورة يتطلب حوالي <strong style="color:var(--ice);">162,000 ألماسة</strong>.</li>
        <li>اليوم الثاني من HOC يمنح نقاطاً للعجلة.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;margin-bottom:.9rem;"><strong style="color:var(--ice);">ملاحظة:</strong> لا تستخدم الشظايا العامة على أبطال العجلة.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">ملخص:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-right:1.2rem;">
        <li style="margin-bottom:.4rem;">لا تدر العجلة إلا إذا كان لديك ما يكفي من الجواهر لـ70 أو 120 دورة إجمالاً لكل فعالية.</li>
        <li style="margin-bottom:.4rem;">قم دائماً بالدوران 10 مرات في كل مرة للحصول على الخصم.</li>
        <li style="margin-bottom:.4rem;">هدفك هو الوصول إلى 4 نجوم على الأقل للبطل.</li>
        <li style="margin-bottom:.4rem;">لا تستخدم أبداً الشظايا العامة على بطل من العجلة — من الأفضل الاحتفاظ بها حتى تصل إلى حوالي 475، ثم استخدامها كلها على بطل خارج العجلة في بداية جيل مستقبلي لرفعه إلى 4 نجوم.</li>
        <li>إذا شاركت في HOC، استخدم العجلة أيضاً في اليوم الثاني.</li>
      </ul>`,
      about_eyebrow:"التحالف", about_title:"من نحن وقوانيننا",
      about_p1:'<strong>LUX</strong> — تعني "النور" باللاتينية — يجمع بين قادة المنطقة 4511 الذين اختاروا البقاء والنمو معاً بدلاً من الوحدة في العاصفة الثلجية.',
      about_p2:"نحن نقدّر <strong>التعاون اليومي</strong> (المساعدة في البناء، مشاركة الموارد) و<strong>المشاركة الفعّالة</strong> في فعاليات التحالف والمنطقة.",
      about_rules:`<li><em>01</em> ابقَ نشطاً: يُنصح بتسجيل الدخول يومياً.</li>
        <li><em>02</em> شارك في فعاليات التحالف (الحصار، الحرب، الهجرة).</li>
        <li><em>03</em> الاحترام بين الأعضاء — لا يُسمح بأي سلوك سام.</li>
        <li><em>04</em> أخبرنا إذا كنت ستغيب لفترة.</li>
        <li><em>05</em> ساهم بانتظام في أبحاث التحالف.</li>`,
      stat_fullname:"الاسم الكامل", stat_region:"المنطقة", stat_power:"القوة", stat_rank:"ترتيب المملكة", stat_founded:"تأسس في", stat_language:"اللغة", stat_language_val:"جميع اللغات", stat_members:"الأعضاء",
      roster_eyebrow:"القائمة", roster_title:"القيادة",
      th_name:"الاسم", th_rank:"الرتبة", th_role:"الدور", role_leader:"قائد التحالف",
      roster_note:"قيادة R5/R4 محدّثة.",
      nap_eyebrow:"الدبلوماسية", nap_title:"اتفاقية عدم الاعتداء (NAP)",
      nap_intro:"اتفاقية عدم اعتداء تم التفاوض عليها بين R4/R5 من كلا التحالفين. يجب على جميع الأعضاء اتباع هذه الشروط:",
      nap_list:`<li style="margin-bottom:.55rem;">ممنوع مهاجمة مدن أو تجمعات أو مقرات أو رايات أعضاء اتفاقية عدم الاعتداء.</li>
      <li style="margin-bottom:.55rem;">ممنوع استكشاف مدن أو مربعات موارد أعضاء الاتفاقية.</li>
      <li style="margin-bottom:.55rem;">ممنوع استقطاب لاعبي الاتفاقية.</li>
      <li style="margin-bottom:.55rem;">تُحل الانتهاكات أولاً بين R4/R5 من كلا التحالفين.</li>
      <li style="margin-bottom:.55rem;">العقوبات تطال اللاعب فقط وليس التحالف — الأولى: تحذير، الثانية: تخفيض رتبة، الثالثة: الطرد من الاتفاقية.</li>
      <li style="margin-bottom:.55rem;">القلعة / المنشأة / المعقل: ممنوع مهاجمة المدن أثناء هذه المعارك؛ قلعة واحدة لكل تحالف (حسب الترتيب، يُتحقق منها كل أحد)؛ المعقل مخصص فقط لأفضل 4 تحالفات؛ ممنوع سد الطرق أو ابتلاع منشآت الرايات.</li>
      <li style="margin-bottom:.55rem;">حساب مزرعة/أكاديمية واحد فقط لكل تحالف.</li>
      <li style="margin-bottom:.55rem;">ممنوع إزالة الوسم لمهاجمة تحالف من أفضل 10 للتحايل على الاتفاقية.</li>
      <li style="margin-bottom:.55rem;">قواعد PvP الخاصة بالفعاليات تتجاوز الاتفاقية أثناء SvS وBear Invasion Alliance وBrothers Battle وغيرها.</li>
      <li>الاحترام والتعاون واللعب النظيف في جميع الأوقات.</li>`,
      events_eyebrow:"جارية", events_title:"الفعاليات",
      status_signup:"التسجيل مفتوح", status_guidelines:"إرشادات", status_upcoming:"قادمة", status_reference:"مرجع",
      champ_h3:"بطولة التحالف",
      champ_body:`<p style="margin-bottom:.7rem;">حتى لو لم تستطع القتال، ستحصل على مكافآت لمجرد التسجيل — لا تنسَ التسجيل.</p>
      <ol style="color:var(--muted);font-size:.9rem;padding-right:1.2rem;">
        <li style="margin-bottom:.5rem;">أرسل أقوى 3 أبطال لديك.</li>
        <li style="margin-bottom:.5rem;">لتوزيع القوات، حاول احترام نسبة مشاة : رماح : رماية قدرها 5:2:3 قدر الإمكان.</li>
        <li>ستكون هناك فترة لتعديل الصفوف بعد التسجيل — لتسهيل الأمر، سجّل في الصف الأوسط.</li>
      </ol>`,
      bear_h3:"فخاخ الدببة — استراتيجية التجمع",
      bear_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">ابدأ تجمعاً</strong> بأفضل أبطالك — بدون Gina، بدون أبطال زرق. وازن قواتك حتى تتمكن من الانضمام لأكبر عدد ممكن من نقاط التجمع.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">ثم انضم إلى التجمعات الأخرى</strong> المقودة بواسطة:</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-right:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Jessie + آخر + آخر (توازن)</li>
        <li style="margin-bottom:.4rem;">Jaser + آخر + آخر (توازن)</li>
        <li style="margin-bottom:.4rem;">Seo Yoon + آخر + آخر (توازن)</li>
        <li>يمكنك الانضمام أيضاً بدون بطل.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;"><strong style="color:var(--ice);">تنبيه:</strong> البطل السيئ يؤثر على التجمع بأكمله.</p>`,
      weapon_h3:"فعالية مصنع الأسلحة",
      weapon_body:`التسجيل يُغلق اليوم.<br>
      الفرقة 1 — UTC 14:00<br>
      الفرقة 2 — UTC 19:00<br><br>
      لا تنسَ التسجيل مسبقاً. تفويت التسجيل مرتين دون سبب وجيه سيؤدي إلى استبعادك من المشاركة — سجّل فقط إذا كنت متأكداً من قدرتك على الحضور.<br><br>
      <strong style="color:var(--ice);">ملاحظة:</strong> التصويت على فترة زمنية <em style="font-style:italic;color:var(--frost);">ليس</em> نفس الشيء كالتسجيل. يجب عليك الدخول إلى الفرقة التي صوّت لها وتحديد "المشاركة".`,
      siege_h3:"حصار التحالف",
      siege_body:`<p style="margin-bottom:.8rem;">فعاليتا حصار قادمتان — <strong style="color:var(--ice);">Bastion Fort</strong> و<strong style="color:var(--ice);">Solar Castle</strong>. الأهداف المخصصة: القلعة 2، الحصن 7، الحصن 9. ستحتاج المجمعات أيضاً إلى دفاع. جهّز حامياتك ونسّق الدفاع عن المعقل مع بقية LUX.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">اليوم:</strong> معارك في المعقل رقم 2 والحصون رقم 7 و9. تحقق من الجدول لمعرفة أوقات المعارك الدقيقة.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">القواعد:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-right:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">اتبع تعليمات R4 وانضم إلى تجمعاتهم (Jessie).</li>
        <li style="margin-bottom:.4rem;">بعد التجمع، أرسل Patrick.</li>
        <li style="margin-bottom:.4rem;">ابقَ في القلعة/المعقل لمدة دقيقة واحدة على الأقل لحفظ مساهمتك.</li>
        <li>ممنوع الهجوم الفردي أو بدء تجمعات — الهجوم بدون أوامر سيؤدي إلى الطرد من التحالف.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;">شكراً لمشاركتكم!</p>`,
      migration_h3:"هجرة المنطقة",
      migration_body:"معلومات ونافذة الهجرة للمنطقة 4511 — التفاصيل قيد التأكيد.",
      ratios_h3:"نسب القوات — الاستكشاف العميق",
      ratios_intro:'نسبة القوات (مشاة : رماح : رماية). الأساس القياسي <strong style="color:var(--ice);">50:20:30</strong> — يُعدّل حسب المنطقة كما يلي:',
      zone_beast:"كهف الوحش", zone_gem:"منجم الجواهر", zone_earth:"نواة الأرض", zone_hero:"أرض الأبطال", zone_forge:"مصهر المعدات", zone_lab:"المختبر تحت الأرضي",
      snow_h3:"مزيلو الثلوج — إرشادات استراتيجية",
      snow_body:`<p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">أولوية المعدات.</strong> قم بترقية المعطف والقفازات أولاً؛ لا تنتقل للمعدات الأخرى إلا بعد إعطاء الأولوية لهذين.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">حد التوقف.</strong> بمجرد وصول تطهير الأرض إلى 95%، توقف عن إزالة الثلج يدوياً واستخدم الصاروخ (عنصر الإزالة الفورية) لإنهاء الباقي.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">كفاءة الوقود.</strong> كل ترقية للفرن توسّع أرضك تلقائياً. تجنب إهدار الوقود بإزالة الثلج بشكل دائري حول الفرن — تقدم بنمط متعرج بدلاً من ذلك لتقليل الطاقة المهدرة.</p>
      <p><strong style="color:var(--ice);">ترتيب الإزالة.</strong> تتطلب ثلاثة أنواع من الثلج كميات مختلفة من الطاقة: الأبيض (الأقل)، الأزرق (متوسط)، والجليد (الأعلى). أزلها بهذا الترتيب — الأبيض ثم الأزرق ثم الجليد — لأن كل ترقية للموقد تقلل تكلفة الطاقة لكل مربع لاحقاً.</p>`,
      twin_h3:"النجمتان التوأمان — نصائح سريعة",
      twin_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">الفريق:</strong> شكّل فريقاً مع لاعبين نشطين. قد تُملأ الفرق غير المكتملة تلقائياً، ولا يمكن تغيير الفريق بعد انتهاء الاختيار.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">النرد:</strong> النرد العادي يتحرك بشكل عشوائي بين 1 و6 خطوات. احتفظ بنرد الكريستال — فهو يتيح لك اختيار الرقم بالضبط.</p>
      <p><strong style="color:var(--ice);">الاستراتيجية:</strong> احتفظ بنرد الكريستال حتى تصبح على بعد 1-6 مربعات من صندوق المغامرة أو مكافأة قيّمة، ثم اهبط عليها بدقة. لا تهدر نرد الكريستال في تحركات عشوائية!</p>`,
      guides_eyebrow:"الموارد", guides_title:"الأدلة والنصائح",
      guide1_h3:"أولويات البناء في بداية اللعبة",
      guide1_body:"ركّز على الفرن ومركز القيادة ومباني الموارد قبل الثكنات.",
      guide2_h3:"تحسين أبطالك",
      guide2_body:"استثمر أولاً في الأبطال الذين يناسبون أسلوب لعبك (دفاع، اقتصاد، أو استكشاف).",
      guide3_h3:"الاستعداد لحصار",
      guide3_body:"قوّ قوات حاميتك ونسّق أوقات الدخول مع التحالف قبل الفعالية.",
      codes_eyebrow:"هدايا مجانية", codes_title:"أكواد الهدايا",
      codes_intro:"استبدل هذه الأكواد بمكافآت مجانية داخل اللعبة. قد تنتهي صلاحية الأكواد في أي وقت، لذا استخدمها في أقرب وقت ممكن.",
      codes_android:"أندرويد", codes_android_steps:"الملف الشخصي ← الإعدادات ← كود الهدية ← إدخال الكود",
      codes_ios:"iOS", codes_ios_steps:'انسخ الكود ومعرّف اللاعب الخاص بك ← اذهب إلى <a href="https://wos-giftcode.centurygame.com" style="color:var(--frost);" target="_blank" rel="noopener">wos-giftcode.centurygame.com</a> ← أدخلهما',
      footer_note:"موقع غير رسمي، من صنع التحالف"
    },

    pt: {
      nav_alliance:"Aliança", nav_news:"Notícias", nav_leadership:"Liderança", nav_nap:"NAP", nav_events:"Eventos", nav_guides:"Guias", nav_codes:"Códigos",
      milestone_label:'Próxima meta de poder <strong>2B</strong>',
      milestone_remain:'— 90M restantes',
      hero_region_tag:"Região 4511",
      hero_sub:"Quando o frio levou tudo, a <strong>LUX</strong> manteve a luz acesa. Uma aliança internacional na região 4511 no Whiteout Survival — disciplina, trabalho em equipe e um fogo que nunca se apaga.",
      scroll_cue:"Rolar ↓",
      news_eyebrow:"Últimas notícias", news_title:"Notícias",
      news_status:"Atenção",
      news_h3:"Os heróis da Gen 2 estão chegando",
      news_body:`<p style="margin-bottom:.7rem;">Cada geração de heróis traz três novos heróis — um de Infantaria, um Lanceiro e um Atirador. Cada geração inclui de 5 a 6 Rodas da Sorte (uma geração dura cerca de 80 dias). Você ainda poderá escolher heróis anteriores também.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Flint</strong> chega à roda em três dias e algumas horas — um herói de Infantaria, e importante de conseguir. É uma melhoria enorme em relação ao Sergey.</p>
      <p style="margin-bottom:.7rem;">Não há um número exato de diamantes necessário para consegui-lo, mas a roda depende da sorte além de marcos específicos de giros que garantem fragmentos de herói.</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">1 giro: 1.500 diamantes — 10 giros: 13.500 diamantes.</li>
        <li style="margin-bottom:.4rem;">Use a opção de 10 giros — sai mais barato por giro.</li>
        <li style="margin-bottom:.4rem;">Os marcos garantidos de baús de fragmentos aparecerão na roda assim que o evento começar.</li>
        <li style="margin-bottom:.4rem;">O último marco é em 120 giros — não gire além disso a menos que você tenha muitíssimos recursos. Chegar a 120 giros custa aproximadamente <strong style="color:var(--ice);">162.000 diamantes</strong>.</li>
        <li>O Dia 2 do HOC dá pontos para a roda.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;margin-bottom:.9rem;"><strong style="color:var(--ice);">Nota:</strong> não use fragmentos gerais em heróis da roda.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Resumo:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.4rem;">Só gire a roda se tiver gemas suficientes para 70 ou 120 giros totais por evento.</li>
        <li style="margin-bottom:.4rem;">Sempre gire 10x de cada vez para obter o desconto.</li>
        <li style="margin-bottom:.4rem;">Seu objetivo é chegar a pelo menos 4 estrelas no herói.</li>
        <li style="margin-bottom:.4rem;">Nunca use fragmentos gerais em um herói de roda — melhor guardá-los até ter ~475, depois usar todos em um herói fora da roda no início de uma futura geração para levá-lo a 4 estrelas.</li>
        <li>Se você participar do HOC, use a roda também no Dia 2.</li>
      </ul>`,
      about_eyebrow:"A aliança", about_title:"Sobre &amp; regras",
      about_p1:'<strong>LUX</strong> — "luz" em latim — reúne líderes da região 4511 que escolheram sobreviver e crescer juntos em vez de sozinhos na nevasca.',
      about_p2:"Valorizamos o <strong>trabalho em equipe diário</strong> (ajuda na construção, compartilhamento de recursos) e a <strong>participação ativa</strong> nos eventos da aliança e da região.",
      about_rules:`<li><em>01</em> Mantenha-se ativo: login diário recomendado.</li>
        <li><em>02</em> Participe dos eventos da aliança (cerco, guerra, migração).</li>
        <li><em>03</em> Respeito entre os membros — nenhuma toxicidade tolerada.</li>
        <li><em>04</em> Avise-nos se for ficar ausente por um tempo.</li>
        <li><em>05</em> Contribua regularmente para a pesquisa da aliança.</li>`,
      stat_fullname:"Nome completo", stat_region:"Região", stat_power:"Poder", stat_rank:"Rank do reino", stat_founded:"Fundada em", stat_language:"Idioma", stat_language_val:"Todos os idiomas", stat_members:"Membros",
      roster_eyebrow:"Elenco", roster_title:"Liderança",
      th_name:"Nome", th_rank:"Rank", th_role:"Função", role_leader:"Líder da aliança",
      roster_note:"Liderança R5/R4 atualizada.",
      nap_eyebrow:"Diplomacia", nap_title:"Pacto de Não Agressão (NAP)",
      nap_intro:"Pacto de não agressão negociado entre os R4/R5 de ambas as alianças. Todos os membros devem seguir estas regras:",
      nap_list:`<li style="margin-bottom:.55rem;">Sem ataques a cidades, concentrações, QG ou bandeiras de membros do NAP.</li>
      <li style="margin-bottom:.55rem;">Sem espionagem de cidades ou blocos de recursos do NAP.</li>
      <li style="margin-bottom:.55rem;">Sem aliciamento de jogadores do NAP.</li>
      <li style="margin-bottom:.55rem;">As violações são resolvidas primeiro entre os R4/R5 de ambas as alianças.</li>
      <li style="margin-bottom:.55rem;">As penalidades atingem apenas o jogador, não a aliança — 1ª: aviso, 2ª: rebaixamento, 3ª: banido do NAP.</li>
      <li style="margin-bottom:.55rem;">Fortaleza / Instalação / Bastião: sem ataques a cidades durante essas batalhas; 1 fortaleza por aliança (por rank, verificado aos domingos); o Bastião é apenas para as 4 melhores alianças; proibido bloquear caminhos ou engolir instalações de bandeira.</li>
      <li style="margin-bottom:.55rem;">Apenas uma conta fazenda/academia por aliança.</li>
      <li style="margin-bottom:.55rem;">Proibido remover a tag para atacar uma aliança do Top 10 e driblar o NAP.</li>
      <li style="margin-bottom:.55rem;">As regras de PvP dos eventos têm prioridade sobre o NAP durante SvS, Bear Invasion Alliance, Brothers Battle, etc.</li>
      <li>Respeito, cooperação e jogo limpo em todos os momentos.</li>`,
      events_eyebrow:"Em andamento", events_title:"Eventos",
      status_signup:"Inscrições abertas", status_guidelines:"Diretrizes", status_upcoming:"Em breve", status_reference:"Referência",
      champ_h3:"Campeonato da aliança",
      champ_body:`<p style="margin-bottom:.7rem;">Mesmo que você não possa lutar, ainda recebe recompensas só por se inscrever — não esqueça de se registrar.</p>
      <ol style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;">
        <li style="margin-bottom:.5rem;">Envie seus 3 heróis mais fortes.</li>
        <li style="margin-bottom:.5rem;">Para a distribuição das tropas, tente respeitar ao máximo uma proporção Infantaria : Lanceiro : Atirador de 5:2:3.</li>
        <li>Haverá um período de ajuste de linhas após a inscrição — para facilitar, registre-se na linha do meio.</li>
      </ol>`,
      bear_h3:"Bear Traps — Estratégia de concentração",
      bear_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Inicie uma concentração</strong> com seus melhores heróis — nada de Gina, nada de heróis azuis. Equalize suas tropas para conseguir entrar no maior número possível de pontos de concentração.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Depois entre nas outras concentrações</strong> lideradas com:</p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Jessie + outro + outro (equaliza)</li>
        <li style="margin-bottom:.4rem;">Jaser + outro + outro (equaliza)</li>
        <li style="margin-bottom:.4rem;">Seo Yoon + outro + outro (equaliza)</li>
        <li>Você também pode entrar sem herói.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;"><strong style="color:var(--ice);">Atenção:</strong> um herói ruim afeta toda a concentração.</p>`,
      weapon_h3:"Evento Fábrica de Armas",
      weapon_body:`As inscrições fecham hoje.<br>
      Esquadrão 1 — UTC 14:00<br>
      Esquadrão 2 — UTC 19:00<br><br>
      Não esqueça de se inscrever com antecedência. Perder duas inscrições sem motivo válido resultará na sua remoção da participação — inscreva-se apenas se realmente puder comparecer.<br><br>
      <strong style="color:var(--ice);">Nota:</strong> votar em um horário <em style="font-style:italic;color:var(--frost);">não</em> é o mesmo que se inscrever. Você precisa entrar no esquadrão em que votou e marcar "participar".`,
      siege_h3:"Cerco da aliança",
      siege_body:`<p style="margin-bottom:.8rem;">Dois eventos de cerco a caminho — <strong style="color:var(--ice);">Bastion Fort</strong> e <strong style="color:var(--ice);">Solar Castle</strong>. Alvos atribuídos: Castelo 2, Forte 7, Forte 9. Os complexos também precisarão de defesa. Prepare suas guarnições e coordene a defesa do bastião com o resto da LUX.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Hoje:</strong> batalhas no Bastião #2 e nos Fortes #7 &amp; #9. Confira o cronograma para os horários exatos das batalhas.</p>
      <p style="margin-bottom:.5rem;"><strong style="color:var(--ice);">Regras:</strong></p>
      <ul style="color:var(--muted);font-size:.9rem;padding-left:1.2rem;margin-bottom:.7rem;">
        <li style="margin-bottom:.4rem;">Siga as instruções dos R4 e entre em suas concentrações (Jessie).</li>
        <li style="margin-bottom:.4rem;">Depois da concentração, envie o Patrick.</li>
        <li style="margin-bottom:.4rem;">Fique na Fortaleza/Bastião por pelo menos 1 minuto para salvar sua contribuição.</li>
        <li>Nada de ataques solo ou iniciar concentrações — atacar sem ordens resultará em remoção da aliança.</li>
      </ul>
      <p style="color:var(--frost);font-size:.88rem;">Obrigado pela sua participação!</p>`,
      migration_h3:"Migração de região",
      migration_body:"Informações e janela de migração para a região 4511 — detalhes a confirmar.",
      ratios_h3:"Proporções de tropas — Exploração Profunda",
      ratios_intro:'Proporção de tropas (Infantaria : Lanceiro : Atirador). Base padrão <strong style="color:var(--ice);">50:20:30</strong> — ajuste por zona conforme abaixo:',
      zone_beast:"Caverna da Fera", zone_gem:"Mina de Gemas", zone_earth:"Núcleo da Terra", zone_hero:"Terra dos Heróis", zone_forge:"Forja de Equipamentos", zone_lab:"Laboratório Subterrâneo",
      snow_h3:"Snow Busters — Diretrizes de estratégia",
      snow_body:`<p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Prioridade de equipamento.</strong> Melhore primeiro o Casaco e as Luvas; só avance para outros equipamentos depois que estes forem priorizados.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Limite de parada.</strong> Quando a limpeza do território atingir 95%, pare de limpar a neve manualmente e use o foguete (item de limpeza instantânea) para terminar o restante.</p>
      <p style="margin-bottom:.8rem;"><strong style="color:var(--ice);">Eficiência de combustível.</strong> Cada melhoria da fornalha expande automaticamente seu território. Evite desperdiçar combustível limpando blocos em círculo ao redor da fornalha — avance em ziguezague para minimizar a energia desperdiçada.</p>
      <p><strong style="color:var(--ice);">Ordem de limpeza.</strong> Três tipos de neve exigem quantidades diferentes de energia: branca (a mais baixa), azul (moderada) e gelo (a mais alta). Limpe-as nessa ordem — branca, depois azul, depois gelo — já que cada melhoria da lareira reduz o custo de energia por bloco daí em diante.</p>`,
      twin_h3:"Twin Stars — Dicas rápidas",
      twin_body:`<p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Equipe:</strong> forme equipe com jogadores ativos. Equipes incompletas podem ser preenchidas automaticamente, e a equipe não pode ser alterada após o fim da seleção.</p>
      <p style="margin-bottom:.7rem;"><strong style="color:var(--ice);">Dados:</strong> os Dados Normais avançam um número aleatório de 1 a 6 casas. Guarde os Dados de Cristal — eles permitem escolher o número exato.</p>
      <p><strong style="color:var(--ice);">Estratégia:</strong> guarde os Dados de Cristal até estar a 1-6 casas do Baú de Aventura ou de uma recompensa valiosa, e caia exatamente nela. Não desperdice os Dados de Cristal em movimentos aleatórios!</p>`,
      guides_eyebrow:"Recursos", guides_title:"Guias &amp; dicas",
      guide1_h3:"Prioridades de construção no início do jogo",
      guide1_body:"Concentre-se na Fornalha, no Centro de Comando e nos edifícios de recursos antes dos quartéis.",
      guide2_h3:"Otimizando seus heróis",
      guide2_body:"Invista primeiro em heróis que combinem com seu estilo de jogo (defesa, economia ou exploração).",
      guide3_h3:"Preparando-se para um cerco",
      guide3_body:"Reforce suas tropas de guarnição e coordene os horários de login com a aliança antes do evento.",
      codes_eyebrow:"Brindes", codes_title:"Códigos de presente",
      codes_intro:"Resgate estes códigos por recompensas gratuitas no jogo. Os códigos podem expirar a qualquer momento, então use-os o quanto antes.",
      codes_android:"Android", codes_android_steps:"Perfil → Configurações → Código de presente → inserir código",
      codes_ios:"iOS", codes_ios_steps:'Copie o código e seu ID de jogador → acesse <a href="https://wos-giftcode.centurygame.com" style="color:var(--frost);" target="_blank" rel="noopener">wos-giftcode.centurygame.com</a> → insira-os',
      footer_note:"Site não oficial, feito pela aliança"
    }
  };

  const rtlLangs = ['ar'];

  const originalMap = new WeakMap();
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    originalMap.set(el, el.innerHTML);
  });

  function applyLang(lang){
    const dict = lang === 'en' ? null : translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(lang === 'en'){
        el.innerHTML = originalMap.get(el);
      } else if(dict && dict[key] !== undefined){
        el.innerHTML = dict[key];
      }
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLangs.includes(lang) ? 'rtl' : 'ltr';
    const select = document.getElementById('langSelect');
    if(select) select.value = lang;
    try{ localStorage.setItem('lux-lang', lang); }catch(e){}
  }

  const select = document.getElementById('langSelect');
  let currentLang = 'en';
  try{ currentLang = localStorage.getItem('lux-lang') || 'en'; }catch(e){}
  applyLang(currentLang);

  select.addEventListener('change', ()=>{
    applyLang(select.value);
  });
})();

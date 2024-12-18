# Q1: Quels sont les arguments que vous pouvez utiliser pour convaincre votre Client de rendre son quizz accessible ? (Vous pouvez vous aider du cour)
Réponse:
1. Respect des lois et réglementations
Dans de nombreux pays, il existe des lois sur l'accessibilité numérique (comme le RGAA en France ou le WCAG à l'international).
Être en conformité avec ces réglementations évite des sanctions légales et des amendes.
2. Inclusion et égalité d'accès
Rendre un quiz accessible garantit que toutes les personnes, y compris celles ayant des handicaps (visuels, auditifs, moteurs ou cognitifs), peuvent y participer.
Cela montre un engagement envers l'égalité des chances et l'inclusion.
3. Meilleure expérience utilisateur pour tous
Les améliorations d'accessibilité (comme une meilleure navigation ou des contrastes optimisés) bénéficient à tous les utilisateurs, pas seulement à ceux ayant des besoins spécifiques.
Par exemple, les sous-titres pour les vidéos aident les personnes dans des environnements bruyants.
4. Amélioration de l'image de marque
Une entreprise ou organisation qui investit dans l'accessibilité est perçue comme responsable et socialement engagée.
Cela peut attirer davantage de clients ou d’utilisateurs sensibles à ces valeurs.
5. Augmentation de l'audience
Selon l’OMS, environ 15 % de la population mondiale vit avec un handicap.
Rendre un quiz accessible permet d'atteindre un public plus large et d’augmenter le nombre de participants.
6. SEO et visibilité
Les bonnes pratiques d'accessibilité (comme l'utilisation de balises alternatives pour les images ou une structure claire) améliorent également le référencement naturel sur les moteurs de recherche.
Un contenu bien structuré est plus facilement indexé.
7. Innovation et pérennité
Intégrer l'accessibilité dès le départ dans un projet montre une vision innovante et durable.
Cela réduit les coûts d’adaptation ultérieure si les besoins changent.
8. Avantage concurrentiel
Dans certains secteurs, peu d'entreprises investissent dans l'accessibilité. En rendant un quiz accessible, le client peut se démarquer de la concurrence.
9. Respect des valeurs humaines
En rendant un contenu accessible, le client s'aligne sur des valeurs éthiques et humaines, en mettant en avant l'importance de la diversité et de l’inclusion.

# Q2: Ajouter le screen de votre score :
Screen:![alt text](image.png)

# Q3: Est-ce que l'analyse de Lighthouse est suffisante pour évaluer l'Accessibilité de votre Application ?
Réponse: Lighthouse est un excellent point de départ pour évaluer l'accessibilité, car il fournit des retours rapides et automatisés sur des problèmes courants comme les attributs alt manquants ou les contrastes de couleur insuffisants. Cependant, il n'est pas suffisant à lui seul, car il ne couvre pas toutes les exigences, notamment la navigation au clavier ou l'expérience utilisateur avec les technologies d'assistance. Pour garantir une accessibilité complète, Lighthouse doit être complété par des tests manuels, des retours d'utilisateurs en situation de handicap et des outils supplémentaires comme Axe ou Accessibility Insights pour une évaluation plus approfondie.

# Q4: Combien de fois vous devez utiliser une touche du clavier pour passer le quizz ?
Réponse: 33

# Q5: Donner 3 roles ARIA et 3 propriété ARIA
Réponse: Les rôles ARIA permettent de définir le comportement des éléments pour les technologies d’assistance, comme role="button" pour indiquer un bouton, role="alert" pour signaler des messages importants, et role="navigation" pour structurer une zone de navigation. Les propriétés ARIA enrichissent l’accessibilité des éléments, par exemple aria-label pour ajouter une description accessible, aria-hidden pour cacher un élément aux lecteurs d’écran, et aria-expanded pour indiquer si un élément interactif est déployé ou replié.

# Q6: Ajouter le screen de votre score Lighthouse
Screen: ![alt text](image-1.png)

# Q7: L'une des best practice de l'ARIA est "ne pas utiliser l'ARIA" pouvez nous expliquer pourquoi d'après vous ?
Réponse: La best practice "ne pas utiliser l'ARIA" souligne qu'il est préférable d'utiliser les éléments HTML natifs lorsque cela est possible, car ils sont intrinsèquement accessibles et déjà pris en charge par les navigateurs et les technologies d'assistance. Par exemple, un bouton <button> ou un champ de formulaire <input> inclut automatiquement les comportements et propriétés nécessaires pour l'accessibilité, comme la gestion du clavier et des lecteurs d’écran. Utiliser des rôles ou des propriétés ARIA pour remplacer ces éléments natifs peut introduire des bugs, une complexité inutile, ou des incohérences avec les standards d'accessibilité. L'ARIA doit être utilisée uniquement pour combler les lacunes des fonctionnalités HTML lorsqu'il n'existe pas d'équivalent natif.

# Q8: Ajouter le screen de votre score Lighthouse
Screen:![alt text](image-2.png)

# Q10: Quel est la valeur du rapport de contraste actuel :
Réponse: 2.38

# Q11: Quel est la valeur du score AA :
Réponse: 3.0

# Q12: Quel est la valeur du score AAA :
Réponse: 4.5

# Q13: Comment pouvez vous changer la valeur du contraste de votre texte ?
Réponse: Pour changer la valeur du contraste de votre texte, vous pouvez ajuster la couleur du texte (color) et celle de l’arrière-plan (background-color) pour obtenir une meilleure distinction entre les deux. L’opacité (opacity) ou les filtres CSS comme filter: contrast() peuvent également être utilisés pour améliorer le contraste. De plus, augmenter la taille et le poids de la police (font-size, font-weight) renforce la lisibilité. Il est important de respecter les normes WCAG, qui recommandent un ratio de contraste d’au moins 4.5:1 pour le texte normal, et d’utiliser des outils comme WebAIM Contrast Checker pour vérifier la conformité.

# Q14: Ajouter le screen de votre score Lighthouse
Screen:![alt text](image-4.png)

# Q15: Êtes vous capable de déterminer visuellement ce qui est un lien ou pas en appliquant chaque altérations ?
Réponse: 
En appliquant les altérations comme la vision floue, le daltonisme ou l'achromatopsie dans l'onglet "Émuler les déficiences visuelles", il devient très difficile, voire impossible, de distinguer visuellement les liens s’ils ne sont pas bien stylés. Les liens qui dépendent uniquement de la couleur, sans soulignement ou indice visuel supplémentaire, sont indiscernables, notamment avec un faible contraste ou en nuances de gris. Pour garantir leur accessibilité, il est essentiel d'utiliser des indicateurs visuels clairs (soulignement, contraste élevé) et des attributs comme aria-label pour une meilleure prise en charge par les technologies d’assistance.

# Q16: Ajouter le screen de votre score Lighthouse
Screen:![alt text](image-5.png)

# Q17:  Proposition 1
Description: En utilisant aria-live="assertive" sur les éléments dynamiques (comme les questions ou propositions mises à jour dans le quiz), le lecteur d'écran est automatiquement informé des changements. Cela permet de réduire le besoin pour l'utilisateur de naviguer manuellement vers ces éléments pour en prendre connaissance.
Nb d'actions gagnée : 1 action par question mise à jour (évite la navigation manuelle vers la question).

# Q18:  Proposition 2
Description: L'ajout de tabindex permet de structurer l'ordre de navigation au clavier. Par exemple, on peut forcer le focus sur les éléments essentiels (comme le bouton de soumission) et éviter les éléments moins importants (comme les images décoratives).
Nb d'actions gagnée : 1 action par élément non prioritaire (comme une image ignorée). 

# Q19:  Proposition 3
Description: Lorsque le quiz passe à la question suivante, le focus peut être déplacé automatiquement vers la nouvelle question, réduisant le besoin pour l'utilisateur de naviguer manuellement.
Nb d'actions gagnée : 1 action par question (évite à l'utilisateur de tabuler pour trouver la nouvelle question).

# Q1: Quels sont les arguments que vous pouvez utiliser pour convaincre votre Client de rendre son quizz accessible ? (Vous pouvez vous aider du cour)
Réponse: L'accessibilité d'un quiz est essentielle pour plusieurs raisons fondamentales :

**Aspect Légal et Réglementaire**
La mise en conformité avec les normes d'accessibilité est une obligation légale dans de nombreux pays. Cela permet d'éviter les risques juridiques et de respecter les directives WCAG (Web Content Accessibility Guidelines).

**Impact Commercial**
L'accessibilité élargit significativement l'audience potentielle en incluant les personnes en situation de handicap. De plus, elle améliore le référencement naturel (SEO) et renforce l'image de marque inclusive de l'entreprise.

**Bénéfices Techniques**
L'implémentation de l'accessibilité encourage les bonnes pratiques de développement, comme l'utilisation du HTML sémantique et une navigation clavier efficace. Cela résulte en un code plus robuste et plus facile à maintenir.

**Responsabilité Sociale**
En rendant le quiz accessible, l'entreprise démontre son engagement envers l'inclusion et l'égalité des chances. C'est un investissement dans la responsabilité sociale de l'entreprise qui contribue à une société plus inclusive.

**Avantage Économique**
Intégrer l'accessibilité dès la conception est plus rentable que de devoir modifier l'application ultérieurement. Cela permet également d'éviter d'éventuels coûts légaux et d'atteindre un public plus large.

# Q2: Ajouter le screen de votre score :
Screen: ![Score 1 Lighthouse](image.png)

# Q3: Est-ce que l'analyse de Lighthouse est suffisante pour évaluer l'Accessibilité de votre Application ?
Réponse: Non, l'analyse de Lighthouse est un outil utile pour identifier les problèmes d'accessibilité les plus courants, mais il ne remplace pas une évaluation manuelle approfondie. Il est recommandé de compléter l'analyse de Lighthouse par des tests utilisateurs, des audits manuels et des outils spécialisés pour garantir une accessibilité optimale.

# Q4: Combien de fois vous devez utiliser une touche du clavier pour passer le quizz ?
Réponse: Il faut 22 utilisations arriver au quizz, puis 33 pour le passer en entier.(avec tab et entrée)

# Q5: Donner 3 roles ARIA et 3 propriété ARIA
Réponse: ARIA Roles:
```bash
role="navigation" - Identifies major navigation sections
role="main" - Identifies the main content area
role="complementary" - Identifies supporting content
ARIA Properties:

aria-label - Names an element for screen readers
aria-required - Indicates required form fields
aria-expanded - Shows if an expandable element is open/closed
```
# Q6: Ajouter le screen de votre score Lighthouse
Screen: ![Score Lighthouse 2](image-1.png)

# Q7: L'une des best practice de l'ARIA est "ne pas utiliser l'ARIA" pouvez nous expliquer pourquoi d'après vous ?
Réponse: L'une des meilleures pratiques de l'ARIA est de ne pas utiliser l'ARIA si une solution HTML standard existe. Cela est dû au fait que l'ARIA est une technologie de secours qui ne devrait être utilisée que lorsque les éléments HTML natifs ne suffisent pas à fournir une expérience accessible. En effet, l'ARIA peut être complexe à implémenter et à maintenir, et peut entraîner des erreurs si elle est mal utilisée. Il est donc préférable de privilégier les éléments HTML sémantiques et les attributs natifs pour garantir une accessibilité optimale.

# Q8: Ajouter le screen de votre score Lighthouse
Après modifications et recommandations de l'audit Lighthouse : 
Screen: ![Score 3 Lighthouse](image-2.png)

# Q9: Pourquoi le score de lighthouse n'a pas augmenté d'après vous ?
Réponse: **NE PAS REPONDRE**

# Q10: Quel est la valeur du rapport de contraste actuel :
J'avais déjà modifié le contraste pour le rendre plus accessible, voici le screen de l'audit Lighthouse précédent.
Page du site maintenant: ![alt text](image-4.png)
Réponse: ![Contraste rapport](image-3.png)

# Q11: Quel est la valeur du score AA :
Réponse: Le score AA pour le contraste de couleur est de 4.5:1 pour le texte normal et 3:1 pour le texte en gras ou de grande taille. Il est recommandé de respecter ces valeurs pour garantir une accessibilité optimale.

# Q12: Quel est la valeur du score AAA :
Réponse: Le score AAA pour le contraste de couleur est de 7:1 pour le texte normal et 4.5:1 pour le texte en gras ou de grande taille. Il est recommandé de respecter ces valeurs pour atteindre un niveau d'accessibilité supérieur.

# Q13: Comment pouvez vous changer la valeur du contraste de votre texte ?
Réponse: Pour changer la valeur du contraste du texte, vous pouvez ajuster les couleurs du texte et de l'arrière-plan pour respecter les ratios de contraste recommandés. Fond blanc et texte noir.

# Q14: Ajouter le screen de votre score Lighthouse
Screen: ![Score 4 Lighthouse](image-2.png)

# Q15: Êtes vous capable de déterminer visuellement ce qui est un lien ou pas en appliquant chaque altérations ?
Réponse: Oui, on peut déterminer visuellement ce qui est un lien en appliquant différentes altérations, comme le changement de couleur, de soulignement, de style de police ou d'icône. Ces altérations visuelles permettent de distinguer clairement les liens des autres éléments interactifs et de faciliter la navigation pour les utilisateurs.

# Q16: Ajouter le screen de votre score Lighthouse
Screen: ![Score 4 Lighthouse](image-2.png)

# Q17:  Proposition 1
Description:
Nb d'actions gagnée : 

# Q18:  Proposition 2
Description:
Nb d'actions gagnée : 

# Q19:  Proposition 3
Description:
Nb d'actions gagnée : 

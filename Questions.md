# Q1: Quels sont les arguments que vous pouvez utiliser pour convaincre votre Client de rendre son quizz accessible ? (Vous pouvez vous aider du cour)
Réponse:
Conformité légale : Respect des normes (RGAA, ADA) pour éviter sanctions et litiges.
Public élargi : Accessibilité pour les personnes en situation de handicap, augmentant le nombre d'utilisateurs.
Image positive : Valorisation de la responsabilité sociale et de l’inclusion.
Meilleure expérience : Amélioration pour tous les utilisateurs grâce à des interfaces claires et ergonomiques.


# Q2: Ajouter le screen de votre score :
Screen:![Capture d'écran](assets/image.png)

# Q3: Est-ce que l'analyse de Lighthouse est suffisante pour évaluer l'Accessibilité de votre Application ?
Réponse:Non, Lighthouse ne suffit pas. Il détecte des problèmes basiques, mais une vérification manuelle est nécessaire pour tester la navigation au clavier, les lecteurs d’écran et d’autres aspects complexes.



# Q4: Combien de fois vous devez utiliser une touche du clavier pour passer le quizz ?
Réponse:Il faut 30 appuis sur la touche Tab pour passer le quizz.

# Q5: Donner 3 roles ARIA et 3 propriété ARIA
Réponse:
3 rôles ARIA :
role="button" : Définit un élément comme un bouton interactif.
role="alert" : Indique un message d’alerte qui doit être immédiatement annoncé par les lecteurs d’écran.
role="heading" : Déclare un élément comme un titre avec un niveau spécifique (ex : aria-level="1")

3 propriétés ARIA :
aria-label : Donne une étiquette textuelle à un élément sans contenu visible.
aria-hidden : Indique si un élément doit être ignoré par les technologies d’assistance (true ou false).
aria-live : Informe que le contenu d’un élément doit être mis à jour dynamiquement et annoncé par les lecteurs d’écran 

# Q6: Ajouter le screen de votre score Lighthouse
Screen: ![Capture d'écran](assets/image1.png)

# Q7: L'une des best practice de l'ARIA est "ne pas utiliser l'ARIA" pouvez nous expliquer pourquoi d'après vous ?
reponse : L’ARIA doit être utilisée seulement si les éléments HTML sémantiques ne suffisent pas.

Pour moi, cela s'explique car :

HTML sémantique est naturellement accessible : Les balises comme <header>, <section>, <button> et <h1> possèdent déjà des rôles ARIA par défaut.
et Un mauvais usage de l’ARIA peut nuire à l’accessibilité.

# Q8: Ajouter le screen de votre score Lighthouse
Screen:  ![Capture d'écran](assets/image2.png)


# Q9: Pourquoi le score de lighthouse n'a pas augmenté d'après vous ?
Réponse: le score a changé vu que ça change l 'hircherarchie de mon code HTML ( ça permet au reader d'identifier quoi lire en premier )

# Q10: Quel est la valeur du rapport de contraste actuel :
Réponse:   ![Capture d'écran](assets/image3.png)


# Q11 et 12: Quel est la valeur du score AA :
Réponse:  ![Capture d'écran](assets/image4.png)


# Q13: Comment pouvez vous changer la valeur du contraste de votre texte ?
Réponse:Je change la couleur du texte (color) et du fond (background-color) dans le CSS.

# Q14: Ajouter le screen de votre score Lighthouse
Screen:![Capture d'écran](assets/image5.png)

# Q15: Êtes vous capable de déterminer visuellement ce qui est un lien ou pas en appliquant chaque altérations ?
Réponse:Non, il est difficile de déterminer ce qui est un lien avec certaines altérations visuelles comme le flou ou troubles ....


# Q16: Ajouter le screen de votre score Lighthouse
 Screen: ![Capture d'écran](assets/image6.png)

# Q17:  Proposition 1
Description :
Les réseaux sociaux ont été déplacés du haut de la page vers le footer. Cela permet de simplifier la navigation au clavier en évitant aux utilisateurs de passer sur de nombreux liens en début de page. La navigation devient plus rapide pour atteindre le contenu principal.

Nb d'actions gagnée :   20

# Q18:  Proposition 2
Description: Changer le lien "click ici" pour qu'il soit plus visible
Le lien "click ici" manque de visibilité et de contexte clair. Pour améliorer son accessibilité et sa compréhension, on remplace le texte du lien par une description plus informative et on améliore son style pour le rendre visuellement distinct.

Nb d'actions gagnée : 

# Q19:  Proposition 3
Ajout de aria-live="assertive" combiné avec un vidage et une mise à jour forcée du contenu pour s’assurer que la question est lue par le lecteur d’écran. Cela corrige le problème où la question ne se lisait pas auparavant.

Nb d'actions gagnées :
1 action gagnée : L’utilisateur n’a plus besoin de chercher ou de forcer la lecture de la question grâce au lecteur d’écran. La lecture est automatique.

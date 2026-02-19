# Q1: Quels sont les arguments que vous pouvez utiliser pour convaincre votre Client de rendre son quizz accessible ? (Vous pouvez vous aider du cour)
Réponse: Augmente l’audience potentielle, améliore le référencement (SEO), renforce l’image de marque et permet de respecter les obligations légales.

# Q2: Ajouter le screen de votre score :
Screen: ![alt text](image.png)

# Q3: Est-ce que l'analyse de Lighthouse est suffisante pour évaluer l'Accessibilité de votre Application ?
Réponse: Non il manque une vérification manuelle des bonnes pratiques et du visuel du site

# Q4: Combien de fois vous devez utiliser une touche du clavier pour passer le quizz ?
Réponse: Minimum 20 fois

# Q5: Donner 3 roles ARIA et 3 propriété ARIA
Réponse:
<div class="topnav" role="navigation">
<div id="quiz" role="main">
<div class="footer" role="contentinfo">
<a href="#" class="fa fa-facebook" aria-label="Facebook"></a>
<div id="question" aria-live="polite"></div>
<img src="/question.png" width="500" height="600" aria-hidden="true">

# Q6: Ajouter le screen de votre score Lighthouse
Screen: ![alt text](image-1.png)

# Q7: L'une des best practice de l'ARIA est "ne pas utiliser l'ARIA" pouvez nous expliquer pourquoi d'après vous ?
Réponse: L'HTML Semantique est déjà accessible par défault. Utiliser l'aria augmente la declaration de données dans le code + ca peut détruire le site s'il est mal implémenté. 

# Q8: Ajouter le screen de votre score Lighthouse
Screen: ![alt text](image-2.png)

# Q9: Pourquoi le score de lighthouse n'a pas augmenté d'après vous ?
Réponse: Il n'augmente pas ou peu car le code n'est pas "propre" + on a toujours des soucis SEO (j'ai un leger meilleur score car j'ai modifié et reorganisé du code)

# Q10: Quel est la valeur du rapport de contraste actuel :
Réponse: A

# Q11: Quel est la valeur du score AA :
Réponse: #949494 --> Debut pour être bien visible

# Q12: Quel est la valeur du score AAA :
Réponse: #b5b5b5 --> Clairement visible

# Q13: Comment pouvez vous changer la valeur du contraste de votre texte ?
Réponse: Automatiquement avec l'outil google ou avec le spectre de couleurs

# Q14: Ajouter le screen de votre score Lighthouse
Screen: ![alt text](image-3.png)

# Q15: Êtes vous capable de déterminer visuellement ce qui est un lien ou pas en appliquant chaque altérations ?
Réponse: On s'y perd enormement suivant le type d'altération

# Q16: Ajouter le screen de votre score Lighthouse
Screen:![alt text](image-4.png)

# Q17:  Proposition 1
Description: Déplacer tous les liens de réseaux sociaux (20 liens) de la navigation principale vers le footer et ajouter tabindex="-1" pour les exclure de la navigation au clavier. Soucis potentiel si l'utilisateur veut cliquer sur un lien.
Nb d'actions gagnée : jusqu'à 20 actions Tab 

# Q18:  Proposition 2
Description: Déplacer le bouton "More About Us" du header vers le footer.
Nb d'actions gagnée : 1 action Tab 

# Q19:  Proposition 3
Description: Implémenter un focus automatique sur la première proposition de réponse à chaque nouvelle question avec document.getElementById().focus(). Ajouter aria-live="assertive" sur le container des propositions pour annoncer automatiquement les nouvelles options au lecteur d'écran. Cela évite à l'utilisateur de naviguer manuellement jusqu'aux boutons de réponse.
Nb d'actions gagnée : Variable selon le nombre de questions

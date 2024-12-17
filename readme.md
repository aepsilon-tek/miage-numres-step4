# Rappels

## Sujet : Faire Burger Quizz !
Vous avez 4 séances de TD/TP pour  produire un site web qui permettent de répondre à des questions et  donne le score.


## Environnement
L'ensemble des  4 TD/TP sont à réaliser sur **_Gitpod_**.
Vous devez réutiliser le compte que vous avez crée durant la première séance.

## Déroulement

Comme au premier TP, vous devez suivre le même processus que pour contribuer à un projet:
1. Dupliquer (**Forker**) le projet github
1. Modifier / compléter des fichier du repo. forké
1. Commiter vos modifs sur votre repo.
1. Proposer vos modifications sur le repo. parent (**PullRequest**)

## Architecture
L'architecture générale de  l'application  Burger Quizz est la suivante :
![Capture d'écran](assets/Archi.png)

Une application web consomme une API Rest Quarkus  qui s'appuie sur une base de données relationnelles en  mémoire **H2**.

## TP4 - Accessibilité

Votre client veut une application accessible pour des raison sociales mais aussi légale.
* Permet à un utilisateur de passer le quizz.
* Indique le score du joueur à la fin du quizz.
* Met en avant tous ces réseaux sociaux.
* Une page "About".
* Une image fix avec un "?".
* Affiche le score du joueur à la fin du quizz.

**L'objectif de ce quatrième TP est de rendre l'Application Accessible**

# Fork du projet
L'objectif est de créer une copie du projet 'miage-numres-step4' sur votre compte github.

1. Se rendre sur le projet github [miage-numres-step4] (https://github.com/aepsilon-tek/miage-numres-step4)
1. Fork du projet grâce au bouton **Fork**
![Capture d'écran](assets/Fork.png)

# Lancement de GitPod

Pour utiliser  **GitPod** avec votre projet forké, il suffit d'ouvrir  l'url suivant dans votre navigateur :
**https://gitpod.io/#** + **URL_REPO_GITHUB**

Avec un repo _https://github.com/miage3-ae/miage-numres-step4_ alors l'url est : **https://gitpod.io/#https://github.com/miage3-ae/miage-numres-step4**


# ViteJs
 Vite est un outil de construction qui vise à fournir une expérience de développement plus rapide et plus simple pour les projets Web modernes. Il se compose de deux grandes parties :
 - Un serveur de développement qui offre de riches améliorations de
   fonctionnalités par rapport aux modules ES natifs, par exemple un
   remplacement de module à chaud (HMR) extrêmement rapide.
 - Une commande de build qui regroupe votre code avec Rollup,
   préconfiguré pour générer des ressources statiques hautement
   optimisées pour la production.
   
Nous utiliserons Vite durant ce TP pour facilité l'expérience de Devellopement en utilisant notamment le HMR.


# Connecter l'api et le front

1. Ouvrir deux terminaux.
1. Terminal 1 :
   1. Retourner à la racine du projet :  `cd /workspace/miage-numres-step4/`
   2. Aller dans le la partie front : `cd front`
   3. Installer les dépendances : `npm install`
   3. Lancer l'application Front en mode dev : `npm run dev`
1. Terminal 2 :
   1. Retourner à la racine du projet :  `cd /workspace/miage-numres-step4/`
   2. Lancer l'api : `./mvnw quarkus:dev -pl api`
   3. Clicker sur "make public"
   5. Dans VS Code : 
       1. Aller dans l'onglet PORTS
       2. Copier l'Address qui commence par `https://8080...`
   5. Dans le fichier store.js `front/light-stack/src/store.js`
       1. Modifier la ligne : `export const baseUrl = "https://url.api";` par l'url que vous venez de copier`export const baseUrl = "https://8080...";`
7. Faite le Quizz !

# Accessibilité
Les utilisateurs ayant des besoins particuliers vont utiliser des outils d'accessibilité, comme un liseur d'écran (screen reader), ne pas utiliser de souris, et autres.
L'accessibilité est l'ensemble des techniques que l'on peut mettre en place pour leur permettre d'utiliser l'Application sans problèmes.

1. Répondre à la question Q1 du fichier **_Questions.md_**

### Test de l'Accessibilité
Lightouse est un outils présent dans le navigateur Chrome qui se repose sur Axe (vu en cour), un outil permettant d'évaluer jusqu'à un certain point l'accessibilité de votre site web.

1. Ouvrir la console développer (click droit -> inspecter)
2. Aller dans Lighthouse
3. Choisir Navigation, Bureau, Accessibilité
4. Lance l'analyse
5. Répondre à la question Q2 du fichier **_Questions.md_**
5. Répondre à la question Q3 du fichier **_Questions.md_**
4. Passer le Quizz sans utiliser la souris.
5. Répondre à la question Q4 du fichier **_Questions.md_**
8. Commiter  & Pusher le fichier **_Questions.md_**

### Arbre d'arboresence d'Accessibilité
Les navigateurs convertissent le balisage en une représentation interne appelée arbre DOM. Le DOM contient un objet pour chaque balise, attribut et noeud de texte. Les navigateurs créent ensuite un arbre d'accessibilité basé sur l'arbre DOM, celui-ci est utilisé par les technologies d'assistance telles que les lecteurs d'écran via des APIs spécifiques à une plateforme.

Sous Chrome : 
1. Ouvrir la console développer (click droit sur un texte à tester -> inspecter)
4. Dans le side menu qui apparait à droite, sous l'onglet Styles, clicker sur la Accessibilité, coché sur "Activer l’arborescence d’accessibilité de la page entière"
1. Recharger la console développer
4. Dans le side menu qui apparait à gauche un icone d'accessibilité devrait appaitre, si vous clickez dessus vous pourrait voir l'arbre d'Accessibilité

### ARIA
Accessible Rich Internet Applications (ARIA) (qu'on pourrait traduire par « applications internet riches et accessibles ») est un ensemble de rôles et d'attributs d'attributs qui définissent comment rendre le contenu et les applications web accessibles (notamment ceux développés avec JavaScript) pour les personnes avec des handicaps.

ARIA complète HTML afin que les éléments interactifs et les widgets puissent être utilisés par les outils d'assistance quand les fonctionnalités standard ne le permettent pas. Ainsi, ARIA permet de rendre accessible les widgets JavaScript, les indications dans les formulaires, les messages d'erreur et les mises à jour dynamiques du contenu, etc.

Sous Chrome : 
1. Ajouter les "alt" à toutes les images du site et autres ARIA auquels vous pouvez penser.
2. Répondre à la question Q5, Q6 du fichier **_Questions.md_**
3. Commiter & Pusher le fichier **_Questions.md_**


### Semantic HTML
Sémantique signifie "en relation avec le sens". Écrire du code HTML sémantique consiste à utiliser des éléments HTML pour structurer votre contenu en fonction de la signification de chaque élément, et non de son apparence.

Les éléments Sémantique HTML embarque avec eux des ARIA role et propriété. Il faut donc les utiliser au maximum.

Le ```<h1>``` est un élément sémantique qui désigne le titre de la page.
Il existe plusieurs régles pour bien utiliser ces éléments, il faut par exemple n'avoir qu'un seul ```<h1>``` par page, ne pas avoir un ```<hx>``` imbriqué dans un ```<hx-1>``` par exemple : 

```
<h3> bonjour </h3>  <h2> Toi </h2> 
```

1. Répondre à la question Q7 du fichier **_Questions.md_**
1. Aller dans le fichier `front/src/main.js`
5. Reprenez le code HTML pour utiliser les éléments sémantiques.
   1. Liste d'éléments pertinents : ```<header>, <footer>, <section>...```
5. Répondre à la question Q8 du fichier **_Questions.md_**
5. Répondre à la question Q9 du fichier **_Questions.md_**
8. Commiter & Pusher le fichier **_Questions.md_**


### Contraste
Certain utilisateur ont des particularité visuel qui ne leur permet pas de voir certain texte si le contraste avec le fond n'est pas bon.
Il existe trois notations de contraste : A, AA et AAA.
Tout ce qui est en dessous de la notation AA n'est pas considéré comme étant accessible.

Sous Chrome : 
1. Ouvrir la console développer (click droit sur un texte à tester -> inspecter)
4. Dans le side menu qui apparait, clicker sur la couleur, ensuite clicker sur "Rapport de contraste"
5. Répondre à la question Q10, Q11, Q12 et Q13 du fichier **_Questions.md_**
4. Faites en sorte que la valeur de Rapport de contraste soit > AAA
5. Répondre à la question Q14 du fichier **_Questions.md_**
4. Vous êtes actuellement sur l'onglet "Elements" de la consol dévelloper, aller sur l'onglet "Rendu"
4. Descendez en bas "Emuler les déficiences visuelles"
4. Choississez vision floue, et toutes les autres déficiences.
5. Répondre à la question Q15 du fichier **_Questions.md_**
8. Commiter & Pusher le fichier **_Questions.md_**

### Les liens
Comme on viens de le voir certaines déficiences rendent difficile l'idendification des liens.
Quelques bonne pratique permette de rendre les liens accessible :
- Utiliser l'ARIA label pour les nommer.
- Ne pas avoir de lien "click me", il faut plutot que le lien porte l'information de "vers où il dirige".
- Avoir une différenciation visuelle de ce qui est un lien ou ce qui ne l'est pas en dehors de sa couleur.

1. Mettez à jour tous les liens du site.
2. Répondre à la question Q16 du fichier **_Questions.md_**
3. Commiter & Pusher le fichier **_Questions.md_**

### Diriger les utilisateur au mieux
L'objectif est qu'un Utilisateur puisse passer le quizz avec un minimum d'interaction clavier, donner 3 propositions pour arriver a diminuer ces actions.

Vous pouvez par exemple utiliser le ARIA tabindex pour obliger un screen reader à passer sur un élément à l'appuis de la touche tab ou pour l'en empêcher.

### ARIA live region
Dans le passé, un changement dans une page web débouchait souvent sur une relecture intégrale, ce qui agaçait souvent l'utilisateur, ou au contraire très peu ou pas de lecture du tout, rendant inaccessible une partie, voire l'ensemble des informations. Jusqu'à récemment, les lecteurs d'écran n'étaient en mesure d'améliorer cela du fait de l'absence d'éléments standardisés pour prévenir le lecteur d'écran d'un changement. Les zones « live » ARIA comblent cette lacune et fournissent des solutions aux lecteurs d'écran afin de savoir si et comment interrompre l'utilisateur lors d'un changement.

L'ajout de l'ARIA aria-live="assertive" sur un élément HTML permet de notifier le screen reader d'une modification et la lecture automatique de ce dernier.
Vous pouvez aussi utiliser le code js : ``` document.getElementById("id").focus({ focusVisible: true }); ``` pour "focus" un élément html quand vous le souhaitez.

Pour chacune des propositions que vous faites, vous devez :
  1. Decrire la proposition dans le fichier **_Questions.md_**
  1. Implementer votre proposition
  1. Tester la proposition
  1. Indiquez le gain en nombre d'actions supprimé.
  1. Commiter & Pusher le code et le  fichier **_Questions.md_**

### Proposition 1
Suivez les étapes ci-desus et répondre à Q17  du fichier fichier **_Questions.md_**

### Proposition 2
Suivez les étapes ci-desus et répondre à Q18  du fichier fichier **_Questions.md_**

### Proposition 3
Suivez les étapes ci-desus et répondre à Q19  du fichier fichier **_Questions.md_**


# Pull Request
Une fois tous vos commits & Push réalisés sur votre repo, il est nécessaire de faire la **Pull Request** sur le repo **parent**.
Pour cela, il suffit de :
1. Se rendre sur votre compte personnel sur `GitHub`.
1. Sur la page principale, se rendre sur `Contribute` > `Open pull Request`
1. Remplir le titre de la pull request en précisant votre nom (vos noms) et `Create pull request`

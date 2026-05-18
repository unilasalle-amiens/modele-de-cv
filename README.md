# Modèle de CV

Template pour la création d'un CV type projet pour le MakerSpace. Ce template utilise le thème [bulma-clean-theme](https://github.com/chrisrhymes/bulma-clean-theme). Ce CV est personnalisable selon vos envies, vous trouverez sur le site [csrhymes](https://www.csrhymes.com/bulma-clean-theme/) d'autres exemples de disposition de contenu que vous pouvez facilement intégrer dans ce CV.

### Comment Utiliser ce Repository ?

- Modifiez les fichiers [index.md](index.md) (pour la page d'accueil), [parcours.md](parcours.md) (pour mon parcours) et les fichiers du dossier [_products](_products) (pour vos réalisations)
- La génération du site correspondant se réalise automatiquement au moyen des [actions github](https://github.com/unilasalle-amiens/modele-de-cv/actions) et se déploie sur une [page github](https://github.com/unilasalle-amiens/modele-de-cv/settings/pages).
- En cas de problème, ou pour personnaliser votre CV, la documentation du projet est disponible à cette [adresse](https://www.csrhymes.com/bulma-clean-theme/docs/).

### Comment publier le résultat ?
Une fois ton CV terminé :

1. **Fork** ce dépôt sur ton compte personnel.
2. Va dans les **Settings** de ton fork et renomme le dépôt en `ton-pseudo.github.io`.
3. Va dans l'onglet **Actions** et clique sur le bouton vert pour activer les déploiements.
4. Dans **Settings > Pages**, assure-toi que la source est "GitHub Actions".
5. Modifie ton fichier `_config.yml` :
   - `url: "https://ton-pseudo.github.io"`
   - `baseurl: ""`
6. Fais un petit changement (ex: ajoute une ligne dans le README) et fais un **Push**.

### Comment Utiliser ce Repository localement ?
- L'outil [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) permet de récupérer localement votre projet ainsi que de pousser ("push") vos modifications.
- Un éditeur de code, par exemple [Visual Studio Code](https://code.visualstudio.com/) ou [Sublime Text](https://www.sublimetext.com/), comprennet des éditeurs de fichier MarkDown (.md) facilitant la modification et la création de nouveaux fichiers.
- Le compilateur [Jekyll](https://jekyllrb.com/docs/) permet de compiler localement vos fichiers MarkDowns et de prévisaliser le résultat directement sur votre ordinateur.

### Documentation utile
* Ce projet est librement adapté du [template](https://github.com/Makerspace-Amiens/template-project) du [Makerspace](https://github.com/Makerspace-Amiens/template-project). La plupart des informations pour prendre en main la modification et la compilation est disponible dans sa [documentation](https://makerspace-amiens.fr/template-project/).
* Un [Wiki](https://github.com/unilasalle-amiens/modele-de-cv/wiki) est spécifiquement mis à disposition pour toutes les modifications qui concernent le modèle de CV.

## Contact
* Si vous avez des questions ou des suggestions, privilégiez le forum Moodle afin de faire bénéficier de vos questions à tous.

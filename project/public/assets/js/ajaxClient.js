//****************************** DEBUT PROGRAMME *****************************//
$(document).ready(function () {                                               //                                  
//****************************************************************************// 



//*************************** Initialisation du programme ************************//
//Tableau retournĂ© par ajax                                                       //
var tab_data = null;                                                              //
//Indexe pour le parcours du tableau retournĂ© par ajax                            //
var tab_data_index = 0;                                                           //
manageClickEntryDungeon();                                                        //
manageClickAttack(true);                                                          //
manageClickBalm(true);                                                            //
manageClickStoneThrowing(true);                                                   //
manageClickFireball(true);                                                        //
InitializeGame();                                                               //
showSceneFirecamp();                                                              //
//showSceneFight();                                                               //
//EnnemyHP(123,1000);                                                               //
//personaHP(450,800);                                                             //
//personaMP(100,250);                                                             //
//personaSta(600,1050);                                                           //
//showText("Test du bloc texte");                                                 //
//********************************************************************************//

    //-------------------- Fonction : Initialisation du jeu ----------------------//
    function InitializeGame(){
        ajaxCall("actionInitialization");        
    }
    //----------------------------------------------------------------------------//


    //--------------------- Fonction : Affichage du feu de camp ------------------//
    function showSceneFirecamp(){
        document.getElementById("fight-scene").style.display = "none"; 
        document. body.style.backgroundColor = 'black' ;       
        document.getElementById("firecamp-scene").style.display = "block";
        imgEntryDungeon = document.getElementById("imgEntryDungeon");
        //RĂ©fĂ©rence taille window.innerWidth = 1821px window.innerHeight = 926px
        imgEntryDungeon.style.left   = (1350/1821*window.innerWidth) + "px";
        imgEntryDungeon.style.top    = (370/926*window.innerHeight)  + "px";
        imgEntryDungeon.style.width  = (50/1821*window.innerWidth)   + "px";
        imgEntryDungeon.style.height = (50/926*window.innerHeight)   + "px";
    }
    //----------------------------------------------------------------------------//

    //---------------- Fonction : Affichage de la scĂ¨ne de combat ----------------//
    function showSceneFight(){
        document.getElementById("fight-scene").style.display = "block";  
        document. body.style.backgroundColor = 'black' ;
        document.getElementById("firecamp-scene").style.display = "none";
    }
    //----------------------------------------------------------------------------//

    //-------------------- Fonction : gestion clique entrer tour -----------------//
    function manageClickEntryDungeon(){

        document.getElementById("imgEntryDungeon").addEventListener("click", eventClickAttack = function() {
            ajaxCall("actionPlayerEntryDungeon");        
        });

    }
    //----------------------------------------------------------------------------//

    //---------------------- Fonction : gestion clique attaque -------------------//
    function manageClickAttack(actived){
        if(actived===true){
            document.getElementById("attack").addEventListener("click", eventClickAttack = function() {
                
                //document.getElementById("blockAction").style.display = "none";
                ajaxCall("actionPlayerAttack");        
            });
        }
        else{
            document.getElementById("attack").removeEventListener("click",eventClickAttack);
        }
    }
    //----------------------------------------------------------------------------//

    //---------------------- Fonction : gestion clique beaume --------------------//
    function manageClickBalm(actived){
        if(actived===true){
            document.getElementById("balm").addEventListener("click", eventClicBalm = function() {
                ajaxCall("actionPlayerBalm");        
            });
        }
        else{
            document.getElementById("balm").removeEventListener("click",eventClickBalm);
        }
    }
    //----------------------------------------------------------------------------//

    //--------------- Fonction : gestion clique lancer de pierre -----------------//
    function manageClickStoneThrowing(actived){
        if(actived===true){
            document.getElementById("stoneThrowing").addEventListener("click", eventClicStoneThrowing = function() {
                ajaxCall("actionPlayerStoneThrowing");        
            });
        }
        else{
            document.getElementById("stoneThrowing").removeEventListener("click",eventClickStoneThrowing);
        }
    }
    //----------------------------------------------------------------------------//

    //---------------- Fonction : gestion clique boule de feu --------------------//
    function manageClickFireball(actived){
        if(actived===true){
            document.getElementById("fireball").addEventListener("click", eventClicFireball = function() {
                ajaxCall("actionPlayerFireball");        
            });
        }
        else{
            document.getElementById("fireball").removeEventListener("click",eventClickFireball);
        }
    }
    //----------------------------------------------------------------------------//

    //---------------------------- Fonction : HP Ennemy --------------------------//
    function EnnemyHP(hpCurrent, hpMax){
        hpGreenMonster = document.getElementById("hpGreenMonster");
        hpRedMonster   = document.getElementById("hpRedMonster");

        hpGreenMonsterValue = (hpCurrent / hpMax) * 100;
        hpRedMonsterValue = 100 - hpGreenMonsterValue;

        hpGreenMonster.style.width = hpGreenMonsterValue + "%";
        hpRedMonster.style.width   = hpRedMonsterValue + "%";
    }
    //----------------------------------------------------------------------------//


    //---------------------------- Fonction : HP personnage ----------------------//
    function personaHP(hpCurrent, hpMax){
        hpGreen = document.getElementById("hpGreen");
        hpRed   = document.getElementById("hpRed");

        hpGreenValue = (hpCurrent / hpMax) * 100;
        hpRedValue = 100 - hpGreenValue;

        hpGreen.style.width = hpGreenValue + "%";
        hpRed.style.width   = hpRedValue + "%";

        if (hpGreenValue > hpRedValue) {
            hpGreen.innerHTML = "HP : " + hpCurrent + "/" + hpMax;
            hpRed.innerHTML = "";
        }
        else{
            hpRed.innerHTML = "HP : " +  hpCurrent + "/" + hpMax;  
            hpGreen.innerHTML ="";  
        }
    }
    //----------------------------------------------------------------------------//

    //---------------------------- Fonction : MP personnage ----------------------//
    function personaMP(mpCurrent, mpMax){
        mpBlue = document.getElementById("mpBlue");
        mpRed   = document.getElementById("mpRed");

        mpBlueValue = (mpCurrent / mpMax) * 100;
        mpRedValue = 100 - mpBlueValue;

        mpBlue.style.width = mpBlueValue + "%";
        mpRed.style.width   = mpRedValue + "%";

        if (mpBlueValue > mpRedValue) {
            mpBlue.innerHTML = "MP : " + mpCurrent + "/" + mpMax;
            mpRed.innerHTML = "";
        }
        else{
            mpRed.innerHTML = "MP : " +  mpCurrent + "/" + mpMax;    
            mpBlue.innerHTML = "";
        }
    }
    //----------------------------------------------------------------------------//

    //---------------------------- Fonction : MP personnage ----------------------//
    function personaSta(staCurrent, staMax){
        staOrange  = document.getElementById("staOrange");
        staRed   = document.getElementById("staRed");

        staOrangeValue = (staCurrent / staMax) * 100;
        staRedValue = 100 - staOrangeValue;

        staOrange.style.width = staOrangeValue + "%";
        staRed.style.width   = staRedValue + "%";

        if (staOrangeValue > staOrangeValue) {
            staOrange.innerHTML = "EN : " + staCurrent + "/" + staMax;
            staRed.innerHTML = "";
        }
        else{
            staRed.innerHTML = "EN : " +  staCurrent + "/" + staMax;    
            staOrange.innerHTML = "";
        }
    }
    //----------------------------------------------------------------------------//

    //---------------------------- Fonction : Afficher text ----------------------//
    function showText(text){
        document.getElementById("frameText").innerHTML = text;
    } 
    //----------------------------------------------------------------------------//

    //---------------------------- Fonction : Appel Ajax -------------------------//
    function ajaxCall(actionPlayer) {
        //Initialisation du tableau de donnĂ© ajax
        tab_data = null;
        //Initailisation de l'index du tableau
        tab_data_index = 0;

        //CrĂ©ation de la requĂªte ajax
        $.ajax({
            //DĂ©finition de la route vers le serveur
            url: '/game/ajax', //TODO : Modifier le nom de la route peut Ăªtre
            //Protocole d'envoie des donnĂ©es vers le serveur
            type: 'GET',
            //DonnĂ©es envoyĂ©es au serveur
            data: 'actionPlayer=' + actionPlayer, //TODO : Voir si c'est le bon format
            //Type de rĂ©ponse : asynchrone ou synchrone
            async: true,
            //Permet dâ€™indiquer sâ€™il faut utiliser une rĂ©ponse en cache si disponible
            cache: false,
            //Type de donnĂ©es retournĂ© par le serveur
            dataType: 'json',
            
            //Retour avec succĂ¨s
            success: function (dataJSON, status) {
                
                tab_data=JSON.parse(dataJSON);
                
                //Parcours des paramĂ¨tres retournĂ©s du serveur avec temporisation
                executeSequenceAjax();
            },
            //Retour sans succĂ¨s
            error: function (xhr, textStatus, errorThrown) {
                alert("L'appel ajax a failli. Retentez une commande");
                console.log(
                    "xhr:" + xhr
                    + " ; textStatus:" + textStatus
                    + " ; errorThrown:" + errorThrown
                );
            }
        });

    }
    //----------------------------------------------------------------------------//

    //---------------------- Fonction : ExĂ©cution SĂ©quence Ajax ------------------//
    function executeSequenceAjax(){
        if( tab_data_index <= ( tab_data.length - 1 ) ){
            //Aiguilleur des actions retournĂ©es par le serveur
            aiguilleurAction();
            //IncrĂ©mentation de l'index de la table data
            tab_data_index++;
            setTimeout(executeSequenceAjax,5000);
        }
    } 
    //----------------------------------------------------------------------------//

    //----------------------- Fonction : Aiguilleur Action -----------------------//
    function aiguilleurAction(){
        switch (tab_data[tab_data_index].action) {
            //Montre le dungeon la scĂ¨ne de combat
            case 'showSceneFight':
                action = tab_data[tab_data_index];
                showSceneFight();
                EnnemyHP(action.hpCurrentEnnemy,action.hpMaxEnnemy);                                                               //
                personaHP(action.hpCurrentPersona,action.hpMaxPersona);                                                             //
                personaMP(action.mpCurrentPersona,action.mpMaxPersona);                                                             //
                personaSta(action.staminaCurrentPersona,action.staminaMaxPersona);

                break;
            case 'Mangoes':
            case 'Papayas':

          }

    } 
    //----------------------------------------------------------------------------//


//******************************* FIN PROGRAMME ******************************//
});                                                                           //
//****************************************************************************//

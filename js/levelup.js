let Levels = {
    level_1_max_exp: 100,
    level_2_max_exp: 190,
    level_3_max_exp: 400,
    level_4_max_exp: 600,
    level_5_max_exp: 1100,
    level_6_max_exp: 1800,
    level_7_max_exp: 2400,
    level_8_max_exp: 3600
}



function checkIfLevelUp () {


    switch (Arquero.nivel) {
        case 1: if (Arquero.exp >= Levels.level_1_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
        case 2: if (Arquero.exp >= Levels.level_2_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
        case 3: if (Arquero.exp >= Levels.level_3_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
        case 4: if (Arquero.exp >= Levels.level_4_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
        case 5: if (Arquero.exp >= Levels.level_5_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
        case 6: if (Arquero.exp >= Levels.level_6_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
        case 7: if (Arquero.exp >= Levels.level_7_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
        case 8: if (Arquero.exp >= Levels.level_8_max_exp) {
            Arquero.nivel += 1;
            Arquero.exp = 0;
        }
        break;
    }

    switch (Guerrero.nivel) {
        case 1: if (Guerrero.exp >= Levels.level_1_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
        case 2: if (Guerrero.exp >= Levels.level_2_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
        case 3: if (Guerrero.exp >= Levels.level_3_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
        case 4: if (Guerrero.exp >= Levels.level_4_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
        case 5: if (Guerrero.exp >= Levels.level_5_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
        case 6: if (Guerrero.exp >= Levels.level_6_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
        case 7: if (Guerrero.exp >= Levels.level_7_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
        case 8: if (Guerrero.exp >= Levels.level_8_max_exp) {
            Guerrero.nivel += 1;
            Guerrero.exp = 0;
        }
        break;
    }







   

}
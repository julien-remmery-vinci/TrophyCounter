import { data } from './data.js'

var display = new Display();
display.setRenderLoc(20, 20);
display.setLine(0, `&5Karate Fish&r &b: ${data.STATS.TotalKarate}`);
display.setLine(1, `&5Karate Fish&r &b: 1/${avgKarate()}`);

register("chat", (trophyFish, trophyRarity) => {
    data.COUNTER.Trophy += 1;
    switch(trophyFish.substring(1)){
        case "Blobfish":
            data.COUNTER.Blobfish += 1;
            break;
        case "Flyfish":
            data.COUNTER.Flyfish += 1;
            break;
        case "Golden Fish":
            data.COUNTER.GoldenFish += 1;
            break;
        case "Gusher":
            data.COUNTER.BlobfGusherish += 1;
            break;
        case "Karate Fish":
            data.COUNTER.KarateFish += 1;
            data.STATS.TotalKarate += 1;
            data.TIME.LKarateTime = 0;
            break;
        case "Lavahorse":
            data.COUNTER.Lavahorse += 1;
            break;
        case "Mana Ray":
            data.COUNTER.ManaRay += 1;            
            break;
        case "Moldfin":
            data.COUNTER.Moldfin += 1;
            break;
        case "Skeleton Fish":
            data.COUNTER.SkeletonFish += 1;
            break;
        case "Slugfish":
            data.COUNTER.Slugfish += 1;
            break;
        case "Soul Fish":
            data.COUNTER.SoulFish += 1;
            break;
        case "Steaming-Hot Flounder":
            data.COUNTER.SteamingHotFlounder += 1;
            break;
        case "Sulphur Skitter":
            data.COUNTER.SulphurSkitter += 1;
            break;
        case "Vanille":
            data.COUNTER.Vanille += 1;
            break;
        case "Volcanic Stonefish":
            data.COUNTER.VolcanicStonefish += 1;
            break;
        case "Obfuscated 1":
            data.COUNTER.Obfuscated1 += 1;
            break;
        case "Obfuscated 2":
            data.COUNTER.Obfuscated2 += 1;
            break;
        case "Obfuscated 3":
            data.COUNTER.Obfuscated3 += 1;
            break;
        default:
            Chatlib.chat("Trophy Counter : error");
            break;
    }
    data.save();
    display.setLine(0, `&5Karate Fish&r &b: ${data.STATS.TotalKarate}`);
    display.setLine(1, `&5Karate Fish&r &b: 1/${avgKarate()}`);
}).setChatCriteria("&r&6&lTROPHY FISH! &r&bYou caught a &r&${trophyFish}&r&r&r &r&l&r${trophyRarity}&r&b.&r");

function avgKarate(){
    let avg = data.COUNTER.Trophy/data.COUNTER.KarateFish;
    data.STATS.avgKarate = Math.round(avg);
    data.save();
    return Math.round(avg);
}

register("step", () => {
    data.TIME.LKarateTime += 1;
    data.save()
    LKarateTime = data.TIME.LKarateTime;
    
    if (LKarateTime < 60) {
        display.setLine(2, `&5Karate Fish&r &b: ${LKarateTime}s`);
    } else if (LKarateTime < 3600) {
        display.setLine(2, `&5Karate Fish&r &b: ${Math.floor(LKarateTime/60)}m ${Math.floor(LKarateTime%60)}s`);
    } else if (LKarateTime < 86400) {
        display.setLine(2, `&5Karate Fish&r &b: ${Math.floor(LKarateTime/3600)}h ${Math.floor((LKarateTime % (3600)) / 60)}m ${Math.floor(LKarateTime%60)}s`);
    } else {
        display.setLine(2, `&5Karate Fish&r &b: ${Math.floor(LKarateTime/86400)}d ${Math.floor((LKarateTime % (86400)) / (3600))}h ${Math.floor((LKarateTime % (3600)) / 60)}m ${Math.floor(LKarateTime%60)}s`);
    } 
}).setFps(1)

register("command", (nbKarate) => {
    data.STATS.TotalKarate = parseInt(nbKarate);
    data.save();
    display.setLine(0, `&5Karate Fish&r &b: ${data.STATS.TotalKarate}`);
}).setName("setkarate");
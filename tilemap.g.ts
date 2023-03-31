// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`0800080000000000000000000000000000000000000000010000010000000000000000000000000000000000000000010000010000000000000000000000000000000000`, img`
. . . . . . . . 
. . . . . . . . 
. . . 2 . . 2 . 
. . . . . . . . 
. . . . . . . . 
. . . 2 . . 2 . 
. . . . . . . . 
. . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.

var Direction;
(function (Direction)
{
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})
(Direction || (Direction = {}));
function move(direction)
{
    console.log("Moving" .concat(Direction[direction].toLowerCase))

}
move(Direction.Left);
console.log(Direction)

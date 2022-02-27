if(parseInt(process.argv[2]) == NaN || process.argv[2] == null)
{
    console.log('Please enter a valid barbell weight');
    process.exit();
}

let barGoal = parseInt(process.argv[2]);
let barWeight = process.argv[3] ? parseInt(process.argv[3]) : 45;
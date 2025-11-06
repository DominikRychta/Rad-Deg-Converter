function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

document.addEventListener('DOMContentLoaded', function() {
    const degreeInput = document.getElementById('degreeInput');
    const radianInput = document.getElementById('radianInput');
    const degreeResult = document.getElementById('degreeResult');
    const radianResult = document.getElementById('radianResult');

    // Degrees to Radians conversion
    document.getElementById('convertToRadians').addEventListener('click', function () {
        const degrees = parseFloat(document.getElementById('degreesInput').value);
        if (!isNaN(degrees)) {
            const radians = degreesToRadians(degrees);
            document.getElementById('radiansOutput').textContent = radians.toFixed(4);
        } else {
            document.getElementById('radiansOutput').textContent = 'Invalid input';
        }
    });

    // Radians to Degrees conversion
    document.getElementById('convertToDegrees').addEventListener('click', function () {
        const radians = parseFloat(document.getElementById('radiansInput').value);
        if (!isNaN(radians)) {
            const degrees = (radians * 180) / Math.PI;
            document.getElementById('degreesOutput').textContent = degrees.toFixed(4);
        } else {
            document.getElementById('degreesOutput').textContent = 'Invalid input';
        }
    });
});
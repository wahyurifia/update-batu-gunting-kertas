var once = function() {
    if(once.done) return;

    console.log('Doing this once!');

    once.done = true;
};

once(); // Logs "Doing this once!"
once(); // Logs nothing


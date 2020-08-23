const doSomethingWithData = async function () {
    const data = await getData();
    console.log("here is your data to do something:", data);
};

doSomethingWithData();
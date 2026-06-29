function confirmDelete(){
    if (window.confirm("Do you want to delete this chat?")) {
        console.log("Action confirmed!");
    }
    else {
        console.log("Action cancelled.");
    }
}
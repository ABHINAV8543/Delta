async function confirmDelete(id){
    if (window.confirm("Do you want to delete this chat?")) {
        const response = (await fetch(`/chats/delete/${id}`, { method: 'DELETE' }));
        const data = await response.json();
        if(response.ok && data.redirectUrl){
            window.location.href = data.redirectUrl;
        }
        else{
            console.log("Deletion Failed.")
        }
    }
    else {
        console.log("Deletion cancelled.");
    }
}
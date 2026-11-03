import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();

    let title = "Error";
    let message = "An unexpected error occurred.";

    if(error.status === 500){
        title = JSON.parse(error.data).title;
        message = JSON.parse(error.data).message;
    }

    if(error.status === 404){
          title = "Page Not Found";
          message = "Unable to locate resource or page";
    }
   


    return(
        <main>
            <h1>{title}</h1>
            <p>{message}</p>
        </main>
    )
}

export default ErrorPage;
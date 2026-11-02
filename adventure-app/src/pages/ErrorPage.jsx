import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return (
        <>
        <MainNavigation />
        <main>
            <h1>Error</h1>
            <p>Unable to load page or resource.</p>
        </main>
        </>
    )
}

export default ErrorPage;
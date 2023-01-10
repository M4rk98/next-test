import exp from "constants";

function HomePage(props) {
    console.log(props);
    return <div>Welcome to Next.js!</div>
}

export function getServerSideProps() {
    return {
        props: { method: 'SSR' }
    }
}

export default HomePage;

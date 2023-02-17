const Home = () => {

    const handleClick = () => {
        console.log('hello sluts');
    }

    const handleClickTwo = (name) => {
        console.log(`hello ${name}`);
    }

    return ( 
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClickTwo}>click me again</button>
    </div> 
    );
}
 
export default Home;
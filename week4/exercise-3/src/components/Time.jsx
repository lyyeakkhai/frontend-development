function Time() {
    let date = new Date().toLocaleString() + "";
    return(
        <h2>
            {date.slice(date.indexOf(",") + 2)}
        </h2>
    );
}

export default Time;
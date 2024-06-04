const StartPage = () => {
    return ( 
        <div className="start">
            <div className="start__title"><p>Добро пожаловать!</p></div>
            <p className="start__subtitle">Это <span style={{color: "#6E41CE"}}>персональное пространство</span> для отслеживаниия привычек</p>
            <p className="start__subtitle">Выбери <span style={{color: "#6E41CE"}}>цели</span> и добавь их в список</p>
            <p className="start__subtitle">Отмечай выполненные задачи и <span style={{color: "#6E41CE"}}>наблюдай за прогрессом</span>!</p>
        </div> 
    );
}
 
export default StartPage;
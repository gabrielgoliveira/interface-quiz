function Question(props) {
  /*this component mounts the question and list the alternatives */
  
    const question = props.question;
    const setOption = props.setOption;

    return (
      <div className="Question">
          <h2>{question.info_question.description}</h2>
              {
                question.options_list.map(element => {
                    return (
                      <div key = {element.id}>
                          <input type="radio" name="options" id={element.id} onClick={(e) => {
                            setOption(element.id);
                          }}/>
                          <label>{element.option_description}</label>     
                      </div>
                    );
                })
              }
      </div>
    );
}
  
export default Question;
  
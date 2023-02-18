const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

class Form extends React.Component {

    submit = (e) => {
        e.preventDefault();
        let obj = {};
        const form = document.getElementById('form_user');
        console.log(Array.from(form.elements))
        Array.from(form.elements)
            .filter(item => item.name)
            .map(element => {
                const{name, value} = element;
                obj[name] = value || 'No information';
            });
        console.log(obj);
        this.addItem(obj);
    }

    addItem = (obj) => {
        const output = document.getElementById('list');
        const element = document.createElement('li');
        element.textContent = `User ID: ${obj.id}, User Name: ${obj.name}, User Nickname: ${obj.username}`
        output.append(element);
    }
    render() {
        return (
            <div className={"container"}>
                <form action="" className={"card"} id={"form_user"}>
                    <h3 className={"card-header"}>User Form</h3>
                    <label htmlFor={"id_input"} className={"form-label"}>Enter User ID</label>
                    <input type="number" className={"form-control"} id={"id_input"} name={"id"}/>

                    <label htmlFor={"name_input"} className={"form-label"}>Enter User Name</label>
                    <input type={"text"} className={"form-control"} id={"name_input"} name={"name"}/>

                    <label htmlFor={"nick_input"} className={"form-label"}>Enter User Nickname</label>
                    <input type={"text"} className={"form-control"} id={"nick_input"} name={"username"}/>

                    <label htmlFor={"email_input"} className={"form-label"}>Enter User Email</label>
                    <input type={"email"} className={"form-control"} id={"email_input"} name={"email"}/>

                    <label htmlFor={"phone_input"} className={"form-label"}>Enter User Phone</label>
                    <input type={"text"} className={"form-control"} id={"phone_input"} name={"phone"}/>
                    <br/>
                    <button type={"submit"} className={"btn btn-success"} onClick={this.submit}>Send User</button>
                </form>

                <ul className={"card"} id={"list"}></ul>
            </div>
        );
    }
}

root.render(<Form/>);
const React = require('react');

class Index extends React.Component {
    render() {
        const { item } = this.props;
        let something = "";
        if (item.length == 0) {
            something = "nothing is done yet"
        }
        return (
                <div>
                    <h1>To Do List</h1>
                    <h2>{something}</h2>
                    <ul>
                        {item.map((item, i) => {
                            let answer = "";
                            if (item.isComplete == true) {
                                    answer = `is complete`;
                            } else {
                                answer = `is not done`;
                            }
                            return (
                                <li>
                                    {item.name} {answer}
                                    <form
                                        action={`/${item._id}?_method=DELETE`}
                                        method="post"
                                    >
                                        <input type="submit" value="delete" />
                                    </form>
                                </li>
                            );
                        })}
                    </ul>
                    <form action="/items" method="POST">
                        To-Do Item: <input type="text" name="name" /><br/>
                        <input type="submit" name="" value="Create Item"/>
                    </form>
                </div>
        );
    }
}

module.exports = Index;
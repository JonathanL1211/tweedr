var React = require("react");

class Follow extends React.Component {
  render() {
        //console.log("this.props is: ", this.props);


    return (
      <html>
        <head />
        <body>
            <h1>Who would you like to follow?</h1>
            <div className="user-attribute">
            <p>Follower's ID:</p>
            <form className="user-form" method="POST" action="/users/followed">
                <input type="text" name="follower_id"  />
                <br/>
                <input name="submit" type="submit" />
            </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Follow;
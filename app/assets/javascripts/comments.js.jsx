var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className='HelloWorld'>
        HelloWorld!
      </div>
    );
  }
});

var ready = function() {
  React.render(
    <HelloWorld />,
    document.getElementById('comments')
  );
};

$(document).ready(ready);
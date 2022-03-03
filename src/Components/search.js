 searchInput = (str) => {
    fetch(`http://monadi.setad-abm.com/api/v1/get-organization?text=${str}`)
      .then((response) => response.json())
      .then(
        (data) =>
          this.setState({
            countries: data,
            isLoading: false,
          }),
        (ReactDOM.findDOMNode(this.refs.txtMessage).value = "")
      )

      .catch((error) => this.setState({ error, isLoading: false }));
  };
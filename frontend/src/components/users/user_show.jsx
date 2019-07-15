import React from 'react';
import LairIndexItem from '../lairs/lair_index_item';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editMode: false,
      host_description: props.user.host_description,
      image_url: props.user.image_url,
      picFile: "",
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.fileSelector = function () {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.addEventListener("change", this.handleFileSelect.bind(this));
      return input
    }.call(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
      .then(action => {
        const user = action.user;
        this.setState({
          image_url: user.image_url,
          host_description: user.host_description,
          loading: false
        });
      });
    if (this.props.lairs.length === 0) {
      this.props.fetchLairs();
    }
  }

  componentDidUpdate() {
    if (this.props.user.image_url !== this.state.image_url) {
      this.props.fetchUser(this.props.userId)
        .then(action => {
          const user = action.user;
          this.setState({
            image_url: user.image_url,
            host_description: user.host_description,
            loading: false
          });
        });
    }
  }

  switchMode(event) {
    event.preventDefault();
    this.setState({
      image_url: this.props.user.image_url,
      picFile: "",
      editMode: !this.state.editMode,
    });
  }

  changeInput(key) {
    return (event) => {
      event.preventDefault();
      this.setState({[key]: event.target.value})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append('host_description', this.state.host_description);
    // if (this.state.picFile) {
    //   formData.append('photo', this.state.picFile);
    // }
    this.props.editUser({
      id: this.props.currentUser.id,
      host_description: this.state.host_description
    })
      .then(() => this.setState({editMode: false}));
  }

  handleFileSelect(event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        picFile: file,
        image_url: fileReader.result
      });
    };
    fileReader.readAsDataURL(file);
  }

  selectFile(event) {
    this.fileSelector.dispatchEvent(new MouseEvent("click"));
  }

  displayFormOrBlurb() {
    if (this.state.editMode && this.props.user.id === this.props.currentUser.id) {
      return (
        <form className="user-profile-edit-container">
          <label className="user-profile-edit-header">
            About
          </label>
          <textarea
            className="host-description-textarea"
            value={this.state.host_description}
            onChange={this.changeInput("host_description")}
          />
          <div>
            <input
              type="submit"
              onClick={this.handleSubmit}
              value="Save"
            />
            <button
              className="teal-link"
              onClick={this.switchMode}
            >
              Cancel
            </button>
          </div>
        </form>
      )
    } else {
      return (
        <div>
          <div className="blurb-quote">"</div>
          <p className="blurb-text">{this.props.user.host_description}</p>
          <div>
            <div className="short-line"/>
          </div>
        </div>
      )
    }
  }

  displayReviews() {
    
  }

  displayListings() {
    if (this.props.lairs.length === 0) {
      return <p>This user has no listings yet.</p>
    } else {
      return (
        <ul className="user-profile-listings">
          {this.props.lairs.map(lair => <LairIndexItem key={`user-lair-${lair.id}`} lair={lair} />)}
        </ul>
      )
    }
  }

  render() {
    let userImageStyle = {
      backgroundImage: `url('${this.state.image_url}')`
    }

    if (this.state.loading){
      return <section className="user-profile-container"></section>
    }

    console.log(this.props.reviews)

    return (
      <section className="user-profile-container">
        <div className="user-profile-left">
          <div className="user-profile-left-image" style={userImageStyle}></div>
          <div className="user-profile-left-line">
            <div className="line"></div>
          </div>
          <h3 className="user-profile-left-provided-header">{this.props.user && this.props.user.username} provided</h3>
          <ul className="user-profile-left-provided" >
            <li>
              <i className="far fa-check-circle"></i>
              <span>Email address</span>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <span>Phone Number</span>
            </li>
            <li>
              <i className="far fa-check-circle"></i>
              <span>Government ID</span>
            </li>
          </ul>
          
          
          {/* {this.state.editMode && this.props.currentUser.id === this.props.user.id && (
            <button onClick={this.selectFile} className="teal-link">update photo</button>
          )} */}
        </div>
        <div className="user-profile-right">
          <h2 className="user-profile-right-name">
            Hi, I'm {this.props.user.username}
          </h2>
          <div className="user-profile-right-sub">
            <p>Joined in 2019</p>
            <span> · </span>
            {!this.state.editMode && this.props.currentUser.id === this.props.user.id && (            
              <button
                className="teal-link unbold"
                onClick={this.switchMode}
              >
                Edit profile
              </button>
            )}
          </div>
          {this.displayFormOrBlurb()}
          <h3 className="user-profile-sub-header">
            {this.props.user.username}'s listings
          </h3>
          {this.displayListings()}
        </div>
      </section>
    )
  }

};

export default UserShow
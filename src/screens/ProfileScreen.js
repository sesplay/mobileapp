import React, { Component } from "react";
// import { View, Text, FlatList, Image, Dimensions } from "react-native";
import { ScreenView, ProfileHeader, ProfileContent } from "../components";
import { players } from "../data/profile";

class ProfileScreen extends Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }
    loadPlayer = () => {
        let id = this.props.navigation.state.params.playerId
        let player = players.filter(item => item.id === id)
        
        if (player.length)
            this.setState({player: player[0], loading: false})
    }
    componentDidMount() {
        this.setState({loading: true})
        this.loadPlayer()
    }
    render() {
        let { player } = this.state
        return (
            <ScreenView scrollable headerBar>
                { this.state.loading ? null : 
                    player ? (
                        <React.Fragment>
                            <ProfileHeader player={player} />
                            <ProfileContent player={player} />
                        </React.Fragment>
                    ) : null
                }
            </ScreenView>
        );
    }
}
export default ProfileScreen;
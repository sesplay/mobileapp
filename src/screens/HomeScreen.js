import React, { Component } from "react";
import { ScrollView, View, FlatList } from "react-native";
import { SearchInputButton, PlayerHorizontalItem, EventHorizontalItem, TitleSection, InsightItem } from "../components";
import { topSessionPlayers, upcomingEvents, insight } from "../data/home";

class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            insight: insight,
            topSessionPlayers: topSessionPlayers,
            upcomingEvents: upcomingEvents
        }
    }
    render() {
        return (
            <ScrollView>
                <SearchInputButton />
                <View style={{paddingTop: 20, paddingBottom: 35}}>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={() => (<View style={{width: 7.5}}></View>)}
                        ListFooterComponent={() => (<View style={{width: 7.5}}></View>)}
                        data={this.state.insight}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <InsightItem insight={item} />
                        )}
                    />
                </View>
                <View style={{paddingBottom: 30}}>
                    <TitleSection 
                        title="Top Session Player" 
                        light 
                        style={{marginLeft: 15, marginBottom: 10}}
                    />
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={() => (<View style={{width: 14}}></View>)}
                        ListFooterComponent={() => (<View style={{width: 14}}></View>)}
                        data={this.state.topSessionPlayers}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <PlayerHorizontalItem player={item} />
                        )}
                    />
                </View>
                <View style={{paddingBottom: 30}}>
                    <TitleSection 
                        title="Upcoming Events" 
                        light 
                        style={{marginLeft: 15, marginBottom: 10}}
                    />
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={() => (<View style={{width: 5}}></View>)}
                        ListFooterComponent={() => (<View style={{width: 5}}></View>)}
                        data={this.state.upcomingEvents}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <EventHorizontalItem event={item} />
                        )}
                    />
                </View>
            </ScrollView>
        );
    }
}
export default HomeScreen;
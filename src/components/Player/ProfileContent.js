import React from "react";
import { View, Text, FlatList, Image  } from "react-native";
import ProfileSection from "./ProfileSection";
import Avatar from "../Avatar";
import Icon from "../Icon";
import EventHorizontalItem from "../Event/EventHorizontalItem";
import LoadMoreButton from "../LoadMoreButton";
import styles from "./styles";
import { dateFormat } from "../../functions/date";
import { electric_green } from "../../styles/colors";

const SkillItem = ({skill}) => (
    <View style={styles.profileSkillItemContainer}>
        <Text style={styles.profileSkillText}>{skill}</Text>
    </View>
)
const ReviewItem = ({review}) => (
    <View style={styles.profileReviewItemContainer}>
        <View style={styles.profileReviewRowContainer}>
            <Avatar size={44} url={review.user.images[2].url}/>
            <View style={styles.profileReviewInfoContainer}>
                <Text style={styles.profileReviewInfoText}><Text style={styles.profileReviewInfoBoldText}>{review.user.name}</Text> from <Text style={styles.profileReviewInfoBoldText}>{review.event.name}</Text></Text>
                <Text style={styles.profileReviewDateText}>{dateFormat(review.date)}</Text>
            </View>
        </View>
        <View style={[styles.profileReviewRowContainer, {marginTop: 10}]}>
            <View style={styles.profileReviewRatingContainer}>
                <Icon name="star" size={26} color={electric_green} /> 
                <Text style={styles.profileReviewRatingText}>{review.rating.toFixed(1)}</Text>
            </View>
            <Text style={styles.profileReviewText}>{review.review}</Text>
        </View>
    </View>
)
const WorkItem = ({work}) => (
    <View style={styles.profileWorkItemContainer}>
        <Image source={{uri: work.images[1].url}} style={styles.profileWorkImage} />
        <Text style={styles.profileWorkNameText}>{work.name}</Text>
    </View>
)

const ProfileContent = ({player}) => (
    <View>
        <ProfileSection title="About">
            <Text style={styles.playerProfileAboutText}>{player.about}</Text>
        </ProfileSection>
        <ProfileSection title="Latest Event" contentContainerStyle={{marginTop: -10}}>
            <FlatList 
                data={player.latest_events}
                keyExtractor={item => item.id}
                renderItem={({item}) => <EventHorizontalItem event={item} />}
            />
            <LoadMoreButton title="See all" />
        </ProfileSection>
        <ProfileSection title="Skills and Interest" contentContainerStyle={{flexDirection: 'row', paddingHorizontal: 12.5, flexWrap: 'wrap'}}>
            {player.skills.map((skill, index) => <SkillItem skill={skill} key={index} /> )}
        </ProfileSection>
        <ProfileSection title="Review">
            <FlatList 
                data={player.reviews}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ReviewItem review={item} />}
            />
        </ProfileSection>
        <ProfileSection title="Works">
            <FlatList 
                data={player.works}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({item}) => <WorkItem work={item} />}
            />
        </ProfileSection>
    </View>
)
export default ProfileContent;
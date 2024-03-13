import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View>
          <Text style={styles.headerText}>
            It's a great day for coffee
            </Text>
            <Text style={styles.headerText}>☕</Text>
        </View>

        <View style={styles.headerButtonContainer}>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.headerButtons}>
              <Button title="Sign in" />
              </View>
            <View style={styles.headerButtons}>
              <Button title="Inbox" />
            </View>
          </View>
          
          <View style={styles.profileButton}>
            <Button title="Profile" />
          </View>

        </View>


      </View>

      <View style={styles.bodyLanding}>
        <Text style={styles.rewardsText}>
          STARBUCKS REWARDS
          </Text>
        <View style={styles.rewardsScroll}>
          {/* 
      <ScrollView></ScrollView> */}

          <Text>
            Let us treat you -- earn and redeem Stars for free drinks, food and
            more.
          </Text>
          <Text>Quick and easy payment, right from the app.</Text>
          <Text>
            Stop in on your birthday for a special treat on the house.
          </Text>
          <Text>
            Enjoy Bonus Star challenges, Double Star Days, and exclusive games.
          </Text>
        </View>
          <TouchableOpacity style={styles.bodyButtons}>
            <Text style={styles.boldText}>
              Join now
            </Text>
          </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.stickyButton}>
            <Text style={styles.boldWhiteText}>
              Join now
            </Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 97.5%)',
    alignItems: "center",
  },
  header: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",

    marginTop: '0',
    paddingTop: 85,

    borderBottomColor: 'hsla(0, 0%, 50%, 0.5)',
    borderBottomWidth: 1.5,
  },
  headerText: {
    textAlign: "left",
    color: "#000",
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerButtonContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%',
    paddingTop: '8%',
    paddingHorizontal: '4%',
    paddingBottom: '1%',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  profileButton: {
    
  },
  bodyLanding: {
    padding: '5%',
    paddingHorizontal: '3.5%',
    alignItems: 'left',
    justifyContent: 'left',
  },
  rewardsText:{
    paddingBottom: '2.5%',

    fontSize: 10,
    fontWeight: 'bold',
    color: 'hsl(0, 0%, 35%)',
  },
  bodyButtons: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,

    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  rewardScroll: {},
  stickyButton: {
    position: 'absolute',
    bottom: 100,
    right: 15,
    borderColor: 'none',
    borderRadius: 30,
  
    paddingHorizontal: 27.5,
    paddingVertical: 20,
  
    backgroundColor: 'hsl(142, 100%, 22.5%)',
  
    shadowColor: 'hsla(0, 0%, 30%, 0.6)', 
    shadowRadius: 10, 
    shadowOpacity: 0.8, 
    shadowOffset: { width: 0, height: 10 }, 
  },  
  boldWhiteText: {
    fontWeight: 'bold',
    color: 'hsl(0, 0%, 100%)',
    fontSize: 17.5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: 'white',

    flexDirection: 'row',

    borderTopColor: 'hsla(0, 0%, 60%, 0.5)',
    borderTopWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,

    padding: 32.5,
  },
  bottomNavIcon: {
    flexDirection: 'column',
    color: 'hsla(0, 0%, 50%, 0.5)',
  },
});

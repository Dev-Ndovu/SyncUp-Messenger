import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { supabase } from './supabase';
import { THEMES } from './themeEngine';

export default function ChatDashboard({ session }: { session: any }) {
  const [rooms, setRooms] = useState<any[]>([]);
  const [newRoomName, setNewRoomName] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('Cyberpunk Neon');

  // Load user's theme preference and chat rooms
  useEffect(() => {
    fetchProfileAndRooms();
  }, []);

  const fetchProfileAndRooms = async () => {
    // Fetch profile theme preference
    const { data: profile } = await supabase
      .from('profiles')
      .select('selected_theme')
      .eq('id', session.user.id)
      .single();

    if (profile?.selected_theme) {
      setSelectedTheme(profile.selected_theme);
    }

    // Fetch rooms
    const { data: roomsData } = await supabase.from('rooms').select('*');
    if (roomsData) setRooms(roomsData);
  };

  const createRoom = async () => {
    if (!newRoomName.trim()) return;
    const { error } = await supabase.from('rooms').insert([{ name: newRoomName, is_group: true }]);
    if (!error) {
      setNewRoomName('');
      fetchProfileAndRooms();
    }
  };

  const theme = THEMES[selectedTheme] || THEMES['Cyberpunk Neon'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundChatList }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.headerBackground }]}>
        <Text style={[styles.headerTitle, { color: theme.primaryAccent }]}>SyncUp Messenger</Text>
        <TouchableOpacity onPress={() => supabase.auth.signOut()}>
          <Text style={[styles.logoutText, { color: theme.secondaryAccent }]}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Create Room Box */}
      <View style={styles.createBox}>
        <TextInput
          style={[styles.input, { backgroundColor: theme.headerBackground, color: theme.textColor, borderColor: theme.primaryAccent + '40' }]}
          placeholder="New chat or group name..."
          placeholderTextColor={theme.subTextColor}
          value={newRoomName}
          onChangeText={setNewRoomName}
        />
        <TouchableOpacity style={[styles.createButton, { backgroundColor: theme.primaryAccent }]} onPress={createRoom}>
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Rooms List */}
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.roomCard, { backgroundColor: theme.headerBackground, borderColor: theme.primaryAccent + '20' }]}>
            <Text style={[styles.roomName, { color: theme.textColor }]}>{item.name}</Text>
            <Text style={[styles.roomSub, { color: theme.subTextColor }]}>Tap to open chat inbox →</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: theme.subTextColor }]}>No chats yet. Create one above!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff10',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoutText: {
    fontSize: 14,
    fontWeight: '600',
  },
  createBox: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  input: {
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 48,
    borderWidth: 1,
    fontSize: 15,
  },
  createButton: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
    height: 48,
  },
  createButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#0f172a',
  },
  roomCard: {
    marginHorizontal: 15,
    marginVertical: 6,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  roomName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  roomSub: {
    fontSize: 13,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15,
  },
});

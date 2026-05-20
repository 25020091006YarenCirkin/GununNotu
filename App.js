import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');

  const handleSave = () => {
    if (note.trim() === '') {
      Alert.alert("Hata", "Lütfen bir not yazın!");
      return;
    }
    setSavedNote(note);
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Günün Notu 📝</Text>
      
      {!savedNote ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Bugün ne yapmak istersin?"
            value={note}
            onChangeText={setNote}
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Notu Kaydet</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.savedNoteLabel}>Kaydedilen Notun:</Text>
          <Text style={styles.savedNoteText}>"{savedNote}"</Text>
          <TouchableOpacity 
            style={[styles.button, {marginTop: 20, backgroundColor: '#6200EE'}]} 
            onPress={() => setSavedNote('')}
          >
            <Text style={styles.buttonText}>Yeni Not Yaz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9c27b0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  savedNoteLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  savedNoteText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9c27b0',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
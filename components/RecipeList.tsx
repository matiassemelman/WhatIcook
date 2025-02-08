import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import type { RecipeMatch } from '@/services/RecipeRecommendationService';

interface RecipeListProps {
  matches: RecipeMatch[];
}

export function RecipeList({ matches }: RecipeListProps) {
  if (matches.length === 0) {
    return (
      <ThemedView style={styles.emptyState}>
        <ThemedText>No se encontraron recetas con los ingredientes disponibles.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {matches.map(({ recipe, matchedIngredients, missingIngredients, matchPercentage }) => (
        <TouchableOpacity key={recipe.id} activeOpacity={0.7}>
          <ThemedView style={styles.recipeCard}>
            <ThemedText type="defaultSemiBold" style={styles.recipeName}>
              {recipe.name} • {recipe.category}
            </ThemedText>
            
            <ThemedText style={styles.matchInfo}>
              Coincidencia: {Math.round(matchPercentage)}%
            </ThemedText>
            
            <ThemedText>Ingredientes que tienes:</ThemedText>
            <ThemedText style={styles.ingredients}>
              {matchedIngredients.join(', ')}
            </ThemedText>
            
            <ThemedText>Te faltan:</ThemedText>
            <ThemedText style={styles.missingIngredients}>
              {missingIngredients.join(', ')}
            </ThemedText>
            
            <ThemedView style={styles.recipeDetails}>
              <ThemedText>🕒 {recipe.preparationTime} min</ThemedText>
              <ThemedText>📊 {recipe.difficulty}</ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyState: {
    padding: 16,
    alignItems: 'center',
  },
  recipeCard: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  recipeName: {
    fontSize: 18,
    marginBottom: 8,
  },
  matchInfo: {
    marginBottom: 12,
  },
  ingredients: {
    marginTop: 4,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  recipeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  missingIngredients: {
    marginTop: 4,
    marginBottom: 12,
    fontStyle: 'italic',
    color: '#ff6b6b',
  },
});
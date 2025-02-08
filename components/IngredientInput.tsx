import { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { RecipeList } from './RecipeList';
import { RecipeRecommendationService } from '@/services/RecipeRecommendationService';
import type { Recipe } from '@/data/recipes';

const CATEGORIES: Recipe['category'][] = ['principal', 'entrada', 'postre', 'desayuno', 'almuerzo'];

export function IngredientInput() {
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [error, setError] = useState('');
  const colorScheme = useColorScheme() ?? 'light';
  const [recommendationService] = useState(() => new RecipeRecommendationService());
  const [selectedCategory, setSelectedCategory] = useState<Recipe['category'] | undefined>();

  const validateAndAddIngredient = () => {
    const trimmedIngredient = ingredient.trim().toLowerCase();
    
    if (!trimmedIngredient) {
      setError('Por favor ingresa un ingrediente');
      return;
    }

    if (ingredients.includes(trimmedIngredient)) {
      setError('Este ingrediente ya fue agregado');
      return;
    }

    setIngredients([...ingredients, trimmedIngredient]);
    setIngredient('');
    setError('');
  };

  const categoryLabels: Record<Recipe['category'], string> = {
    principal: 'Plato Principal',
    entrada: 'Entrada',
    postre: 'Postre',
    desayuno: 'Desayuno',
    almuerzo: 'Almuerzo'
  };

  const getCategoryChipStyle = (isSelected: boolean) => {
    const backgroundColor = isSelected 
      ? Colors.light.tint 
      : (colorScheme === 'dark' ? '#2C2C2C' : '#f0f0f0');
    
    return [
      styles.categoryChip,
      { backgroundColor },
      isSelected && styles.selectedCategoryChip
    ];
  };

  const getCategoryTextStyle = (isSelected: boolean) => {
    if (isSelected) return undefined;
    return colorScheme === 'dark' ? styles.darkModeText : undefined;
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Mis Ingredientes</ThemedText>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            { color: Colors[colorScheme].text }
          ]}
          placeholder="Agregar ingrediente..."
          placeholderTextColor={Colors[colorScheme].icon}
          value={ingredient}
          onChangeText={setIngredient}
          onSubmitEditing={validateAndAddIngredient}
        />
        <TouchableOpacity onPress={validateAndAddIngredient}>
          <IconSymbol
            name="chevron.right"
            size={24}
            color={Colors[colorScheme].icon}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      
      {error ? (
        <ThemedText style={styles.errorText}>{error}</ThemedText>
      ) : null}

      <ThemedView style={styles.ingredientsList}>
        {ingredients.map((item, index) => (
          <ThemedText key={index} style={styles.ingredient}>
            • {item}
          </ThemedText>
        ))}
      </ThemedView>

      {ingredients.length > 0 && (
        <>
          <ThemedText type="subtitle">Filtrar por categoría</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            <TouchableOpacity
              style={[
                styles.categoryChip,
                !selectedCategory && styles.selectedCategoryChip
              ]}
              onPress={() => setSelectedCategory(undefined)}
            >
              <ThemedText>Todas</ThemedText>
            </TouchableOpacity>
            {CATEGORIES.map(category => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryChip,
                  selectedCategory === category && styles.selectedCategoryChip
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <ThemedText>{categoryLabels[category]}</ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          <ThemedText type="subtitle">Recetas Recomendadas</ThemedText>
          <RecipeList 
            matches={recommendationService.recommendRecipes(ingredients, selectedCategory)} 
          />
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  icon: {
    opacity: 0.5,
  },
  errorText: {
    color: '#ff4444',
    fontSize: 14,
  },
  ingredientsList: {
    gap: 8,
  },
  ingredient: {
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedCategoryChip: {
    backgroundColor: Colors.light.tint,
    borderColor: Colors.light.tint,
  },
  darkModeText: {
    color: '#FFFFFF',
  },
});
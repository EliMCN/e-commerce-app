import {useEffect} from "react";
import {collection, getDocs} from "firebase/firestore";
import db from "../../db/db";

const CategoriesLoader = ({setCategories, setError}) => {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const categories = new Set();

        querySnapshot.forEach((doc) => {
          const product = doc.data();
          if (product.category) categories.add(product.category);
        });

        setCategories([...categories]); // Convertimos el Set a array
      } catch (err) {
        console.error("Error al cargar categorías:", err);
        setError("Hubo un problema al cargar las categorías.");
      }
    };

    fetchCategories();
  }, [setCategories, setError]);

  return null;
};

export default CategoriesLoader;

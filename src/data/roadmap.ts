import { DayLesson } from '../types';

export const ROADMAP_LESSONS: DayLesson[] = [
  // --- PHASE 1 ---
  {
    day: 1,
    phase: 1,
    phaseTitle: 'Phase 1: Data Science & Machine Learning Fundamentals (Days 1–3)',
    title: 'Environment Setup & Pandas/NumPy Essentials',
    titleAmharic: 'ቀን 1፡ የልማት አካባቢ ዝግጅት (Environment Setup) እና የPandas/NumPy መሠረቶች',
    durationHours: 2,
    objectives: [
      'Install & verify Python 3.10+, VS Code, and Jupyter Notebook extension',
      'Create an isolated virtual environment (venv) to prevent package conflicts',
      'Install core data libraries: pandas, numpy, scikit-learn, matplotlib, requests',
      'Write a Python verification script that loads and displays sample agricultural data',
    ],
    objectivesAmharic: [
      'Python 3.10+፣ VS Code እና Jupyter Notebook extension በትክክል መጫንና ማረጋገጥ',
      'የተለያዩ ፕሮጀክቶች ፓኬጆች እንዳይጋጩ የPython Virtual Environment (venv) መፍጠር',
      'ዋና ዋና የData Science ቤተ-መጻሕፍት (Pandas, NumPy, Scikit-Learn) መጫን',
      'የአፈር ናሙና መረጃዎችን (NPK, pH) የሚይዝ የሙከራ Pandas DataFrame ኮድ መጻፍ',
    ],
    whyThisMatters:
      'Setting up a clean virtual environment ensures reproducible ML pipelines. As an AI engineer, running unisolated global packages creates "dependency hell" when deploying to production servers.',
    whyThisMattersAmharic:
      'የተለየ Virtual Environment ማዘጋጀት በኮምፒውተርዎ ላይ የሚሰሩ ፕሮጀክቶች ፓኬጆች እንዳይጋጩና ለወደፊቱ ሰርቨር ላይ ስንጭን (Cloud Deployment) በቀላሉ እንዲሰራ ያደርጋል።',
    architectureRole: 'Foundational runtime container supporting all 4 Agri-Smart modules.',
    codeSnippet: `# Day 1: Agri-Smart System Environment & Data Verification
import sys
import numpy as np
import pandas as pd

print(f"Python Version: {sys.version.split()[0]}")
print(f"NumPy Version: {np.__version__}")
print(f"Pandas Version: {pd.__version__}")

# Creating our first Agricultural Soil Sample Dataset
data = {
    'Nitrogen': [90, 85, 60, 74, 100],
    'Phosphorus': [42, 58, 55, 35, 28],
    'Potassium': [43, 41, 44, 40, 30],
    'pH': [6.5, 7.0, 6.1, 6.8, 6.0],
    'Rainfall_mm': [202.9, 226.6, 110.2, 85.4, 160.0],
    'Recommended_Crop': ['Rice', 'Rice', 'Maize', 'Teff', 'Coffee']
}

df = pd.DataFrame(data)
print("\\n--- Sample Agricultural DataFrame Created ---")
print(df.head())
print(f"\\nDataset Shape (Rows, Columns): {df.shape}")
print(f"Average Nitrogen content: {df['Nitrogen'].mean():.2f} mg/kg")
`,
    codeExplanation: [
      {
        line: 'import sys, numpy as np, pandas as pd',
        explanation: 'Imports the core libraries and aliases them as np and pd following industry standards.',
        explanationAmharic: 'የPython ስርዓት፣ የሒሳብ ስሌት (NumPy) እና የዳታ ማኔጅመንት (Pandas) ላይብረሪዎችን ያስገባል።',
      },
      {
        line: 'data = { "Nitrogen": [...], ... }',
        explanation: 'Creates a Python dictionary simulating 5 soil observation records with NPK, pH, rainfall, and crops.',
        explanationAmharic: 'የ5 አርሶ አደሮች የአፈር ናሙና መረጃዎችን (ናይትሮጅን፣ ፎስፈረስ፣ ፖታሽየም፣ ፒኤች፣ ዝናብ) በDictionary መልክ ይይዛል።',
      },
      {
        line: 'df = pd.DataFrame(data)',
        explanation: 'Converts raw key-value pairs into a 2D structured DataFrame table for vectorized math and fast filtering.',
        explanationAmharic: 'መረጃውን ወደ Pandas DataFrame ሰንጠረዥ ይቀይራል፤ ይህም ፈጣን ስሌትና ማጣሪያ ለማድረግ ያስችላል።',
      },
      {
        line: 'print(df.shape), df["Nitrogen"].mean()',
        explanation: 'Inspects matrix dimensions and calculates summary statistics with zero loop overhead.',
        explanationAmharic: 'የዳታውን መጠንና አማካኝ የናይትሮጅን መጠን በቀላሉ ያሰላል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Python for Beginners & Virtual Environments',
        channel: 'FreeCodeCamp / Corey Schafer',
        query: 'python virtual environment vs code pandas tutorial for beginners',
      },
      {
        title: 'Pandas & NumPy Crash Course for Machine Learning',
        channel: 'Krish Naik / StatQuest',
        query: 'pandas numpy crash course data science Krish Naik',
      },
    ],
    quiz: {
      question: 'Why do we use Pandas DataFrame instead of plain Python nested lists for storing agricultural soil data?',
      questionAmharic: 'የአፈርና የሰብል መረጃዎችን በPython List ፈንታ በPandas DataFrame ማዘጋጀት ለምን ይመረጣል?',
      options: [
        'Because Python lists cannot store numbers',
        'Because Pandas provides vectorized operations, column indexing, and fast tabular data manipulation essential for ML pipelines',
        'Because Pandas is the only library capable of opening CSV files',
        'Because Python lists use more screen space',
      ],
      correctIndex: 1,
      explanation: 'Pandas is built on top of C-optimized NumPy arrays, allowing lightning-fast tabular manipulations, indexing, and statistical operations without slow Python for-loops.',
      explanationAmharic: 'Pandas ፈጣንና የተደራጀ የሰንጠረዥ አያያዝ፣ የኮለም ስሌቶችና ለማሽን ለርኒንግ ሞዴል ግብዓት የሚሆኑ ማጣሪያዎችን ያለ ምንም ሉፕ (vectorized) ያከናውናል።',
    },
  },
  {
    day: 2,
    phase: 1,
    phaseTitle: 'Phase 1: Data Science & Machine Learning Fundamentals (Days 1–3)',
    title: 'Supervised ML, Dataset Anatomy (Kaggle Crop Data), Features vs. Labels',
    titleAmharic: 'ቀን 2፡ Supervised Machine Learning መረዳት፣ የKaggle Crop ዳታሴት አወቃቀርና Features vs Labels',
    durationHours: 2.5,
    objectives: [
      'Understand Supervised Learning: Classification vs. Regression',
      'Analyze the 7 Soil & Climate Features (N, P, K, Temp, Humidity, pH, Rainfall)',
      'Distinguish Input Matrix (X) from Target Labels (y)',
      'Load the 2,200-row Kaggle Crop Recommendation dataset using pd.read_csv()',
    ],
    objectivesAmharic: [
      'የSupervised Learning ጽንሰ-ሀሳብን እና የClassification ልዩነትን መረዳት',
      '7ቱን የሰብል መለያ ባህሪያት (N, P, K, የሙቀት መጠን, እርጥበት, pH, ዝናብ) መመርመር',
      'የግብዓት ማትሪክስ (X - Features) እና የተፈለገውን ሰብል (y - Target Label) መለየት',
      'የ2,200 ረድፍ የKaggle Crop Recommendation ዳታሴትን በPandas መጫንና መፈተሽ',
    ],
    whyThisMatters:
      'In agricultural AI, our goal is Multi-Class Classification: given continuous soil chemistry and weather variables, predict 1 out of 22 discrete crop classes.',
    whyThisMattersAmharic:
      'በዚህ ፕሮጀክት የምንሰራው Multi-Class Classification ይባላል፤ ይህም ከአፈርና ከአየር ፀባይ መረጃ ተነስቶ ከ22ቱ ሰብሎች የትኛው እንደሚስማማ መተንበይ ነው።',
    architectureRole: 'Defines the schema and mathematical input boundary for Module 1 (Soil-Crop Recommender).',
    codeSnippet: `# Day 2: Loading & Splitting Features (X) and Labels (y)
import pandas as pd

# Simulating Kaggle Precision Agriculture Dataset loading
url = "https://raw.githubusercontent.com/glory-adebayo/Crop-Recommendation-Dataset/main/Crop_recommendation.csv"
df = pd.read_csv(url)

print("--- Dataset Overview ---")
print(f"Total Records: {len(df)}")
print(f"Unique Crops: {df['label'].nunique()} classes ({', '.join(df['label'].unique()[:5])}...)")

# Splitting Features (X) and Target Label (y)
X = df.drop('label', axis=1)  # 7 Features: N, P, K, temperature, humidity, ph, rainfall
y = df['label']               # Target Crop Name

print(f"\\nFeatures Matrix X Shape: {X.shape}")
print(f"Target Vector y Shape: {y.shape}")
print("\\nSummary Statistics of Soil Features:")
print(X.describe().round(2))
`,
    codeExplanation: [
      {
        line: 'df = pd.read_csv(url)',
        explanation: 'Reads the comma-separated 2,200 record dataset into memory.',
        explanationAmharic: 'የ2,200 አርሶ አደሮች መረጃ የያዘውን CSV ፋይል በቀጥታ ከኢንተርኔት ያነባል።',
      },
      {
        line: 'X = df.drop("label", axis=1)',
        explanation: 'Drops the label column along vertical axis 1 to isolate independent feature variables.',
        explanationAmharic: 'የሰብሉን ስም (Label) ለይቶ 7ቱን የአፈርና አየር ፀባይ ባህሪያት (X) ብቻ ያስቀምጣል።',
      },
      {
        line: 'y = df["label"]',
        explanation: 'Extracts the single dependent target vector containing crop names.',
        explanationAmharic: 'ሞዴሉ ሊተነብየው የሚገባውን የሰብል ስም (Target Vector y) ይለያል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Supervised vs Unsupervised Learning Explained',
        channel: 'StatQuest with Josh Starmer',
        query: 'StatQuest supervised learning classification features and labels',
      },
      {
        title: 'Data Science Feature Matrix X vs Target Vector y',
        channel: 'Krish Naik',
        query: 'Krish Naik machine learning feature vs label dependent independent variables',
      },
    ],
    quiz: {
      question: 'In our Soil Recommender model, what are "Nitrogen" and "Crop Label" respectively?',
      questionAmharic: 'በምንሰራው ሞዴል ውስጥ ናይትሮጅን (N) እና የሰብሉ ስም (Crop Label) ምን ተብለው ይጠራሉ?',
      options: [
        'Both are Target Labels (y)',
        'Nitrogen is a Feature (Independent Variable X), Crop Label is the Target (Dependent Variable y)',
        'Nitrogen is a Hyperparameter, Crop Label is an Optimizer',
        'Both are Weights',
      ],
      correctIndex: 1,
      explanation: 'Nitrogen is an independent input feature (X) measured from the soil, whereas Crop Label is the dependent ground-truth classification target (y) we want the ML model to predict.',
      explanationAmharic: 'ናይትሮጅን ከግብዓት የሚወሰድ ባህሪ (Feature X) ሲሆን፣ የሰብሉ ስም ደግሞ ሞዴሉ እንዲተነብየው የምንፈልገው ግብ (Target y) ነው።',
    },
  },
  {
    day: 3,
    phase: 1,
    phaseTitle: 'Phase 1: Data Science & Machine Learning Fundamentals (Days 1–3)',
    title: 'Data Cleaning, Missing Values, Outliers & Exploratory Data Analysis (EDA)',
    titleAmharic: 'ቀን 3፡ ዳታ ማጽዳት (Data Cleaning)፣ የጎደሉ መረጃዎችን ማረም እና Exploratory Data Analysis (EDA)',
    durationHours: 3,
    objectives: [
      'Check for missing (NaN) values and duplicates in the soil dataset',
      'Perform Exploratory Data Analysis (EDA) to find correlations between pH, rainfall, and crops',
      'Understand Feature Scaling (MinMaxScaler vs. StandardScaler) and when it is needed',
      'Plot distribution histograms for soil nutrients',
    ],
    objectivesAmharic: [
      'በአፈር ዳታሴቱ ውስጥ የጎደሉ (NaN) መረጃዎች እና ድግግሞሾችን መመርመር',
      'በአፈር ፒኤች፣ ዝናብና ሰብሎች መካከል ያለውን ግንኙነት በEDA ማጥናት',
      'Feature Scaling (MinMaxScaler / StandardScaler) መቼ እንደሚያስፈልግ መረዳት',
      'የአፈር ንጥረ-ነገሮችን ስርጭት የሚያሳዩ ግራፎች ማመንጨት',
    ],
    whyThisMatters:
      '"Garbage in, garbage out". Dirty data with anomalies or unhandled nulls degrades ML model accuracy and causes silent inference errors in production.',
    whyThisMattersAmharic:
      'መረጃው ካልጸዳ ሞዴሉ የተሳሳተ ትንበያ ይሰጣል፤ ስለዚህ የጎደሉ መረጃዎችን መመርመር የሞዴሉን አስተማማኝነት 100% ያረጋግጣል።',
    architectureRole: 'Preprocessing pipeline safeguarding raw inputs before feeding ML models.',
    codeSnippet: `# Day 3: Data Quality & Exploratory Data Analysis
import pandas as pd
import numpy as np

# Load dataset
url = "https://raw.githubusercontent.com/glory-adebayo/Crop-Recommendation-Dataset/main/Crop_recommendation.csv"
df = pd.read_csv(url)

# 1. Check Missing Values & Duplicates
null_count = df.isnull().sum().sum()
duplicate_count = df.duplicated().sum()
print(f"Missing Values: {null_count} | Duplicate Rows: {duplicate_count}")

# 2. Agricultural Insights: Finding Average Rainfall for Rice vs. Chickpea
rice_rain = df[df['label'] == 'rice']['rainfall'].mean()
chickpea_rain = df[df['label'] == 'chickpea']['rainfall'].mean()
print(f"Avg Rainfall for Rice: {rice_rain:.1f} mm")
print(f"Avg Rainfall for Chickpea: {chickpea_rain:.1f} mm")

# 3. High Correlation Detection
corr_matrix = df.drop('label', axis=1).corr()
print("\\nTop Correlation Pairs (Checking Multi-collinearity):")
print(corr_matrix.round(2))
`,
    codeExplanation: [
      {
        line: 'df.isnull().sum() & df.duplicated().sum()',
        explanation: 'Scans the dataset to ensure zero missing cells and zero duplicate records.',
        explanationAmharic: 'በዳታው ውስጥ የጎደሉ ወይም የተደገሙ መረጃዎች አለመኖራቸውን ያጣራል።',
      },
      {
        line: 'df[df["label"] == "rice"]["rainfall"].mean()',
        explanation: 'Uses boolean indexing to filter specific crop subsets and calculate domain-specific metrics.',
        explanationAmharic: 'የሩዝ እና የሽምብራ አማካኝ የዝናብ ፍላጎት ልዩነትን በማጣራት የዳታውን ትክክለኛነት ይመሰክራል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Exploratory Data Analysis (EDA) in Python',
        channel: 'Keith Galli / Ken Jee',
        query: 'exploratory data analysis python pandas beginner project',
      },
      {
        title: 'Feature Scaling: Normalization vs Standardization',
        channel: 'StatQuest',
        query: 'StatQuest feature scaling normalization standardization',
      },
    ],
    quiz: {
      question: 'Do Tree-Based models like Decision Trees and Random Forests strictly require Feature Scaling (e.g., StandardScaler)?',
      questionAmharic: 'እንደ Decision Tree እና Random Forest ያሉ ሞዴሎች የግድ Feature Scaling (StandardScaler) ይፈልጋሉ?',
      options: [
        'Yes, otherwise the model will fail to compile',
        'No, because tree splits are based on order/threshold rules, not Euclidean distance or gradient descent',
        'Yes, because NPK numbers are larger than pH numbers',
        'Only on Tuesdays',
      ],
      correctIndex: 1,
      explanation: 'Tree-based algorithms split data points based on feature thresholds independently, making them monotonic and invariant to feature scaling (unlike KNN, SVM, or Neural Networks).',
      explanationAmharic: 'የዛፍ ሞዴሎች (Trees) ውሳኔ የሚሰጡት በመጠን ወይም በደረጃ (thresholds) እንጂ በDistance ስላልሆነ Scaling የግዴታ አይደለም።',
    },
  },
  // --- PHASE 2 ---
  {
    day: 4,
    phase: 2,
    phaseTitle: 'Phase 2: Building Core Machine Learning Models (Days 4–8)',
    title: 'Training the Soil-to-Crop Recommendation Model (Decision Tree & Random Forest)',
    titleAmharic: 'ቀን 4፡ የአፈር-ሰብል አዛማጅ ሞዴል ማሰልጠን (Decision Trees & Random Forest Classifier)',
    durationHours: 3.5,
    objectives: [
      'Split data into Training (80%) and Testing (20%) sets using train_test_split',
      'Train a Decision Tree Classifier and understand Gini Impurity splits',
      'Train an Ensemble Random Forest Classifier (100 Decision Trees)',
      'Export the trained model using joblib / pickle for production inference',
    ],
    objectivesAmharic: [
      'መረጃውን ለስልጠና (80% Training) እና ለሙከራ (20% Testing) መክፈል',
      'Decision Tree Classifier ማሰልጠንና እንዴት ውሳኔ እንደሚሰጥ መረዳት',
      'የተሻለ ጥንካሬ ያለው Random Forest Classifier (100 ዛፎች) ማሰልጠን',
      'የሰለጠነውን ሞዴል በjoblib/pickle ሴቭ አድርጎ ለProduction ዝግጁ ማድረግ',
    ],
    whyThisMatters:
      'Random Forest combines predictions from multiple de-correlated decision trees (Bagging), preventing overfitting on outlier soil measurements and achieving >99% test accuracy.',
    whyThisMattersAmharic:
      'Random Forest ብዙ የውሳኔ ዛፎችን በማጣመር የሚሰራ በመሆኑ ነጠላ ዛፍ ላይ የሚፈጠርን ስህተት (overfitting) በመቀነስ ከ99% በላይ ትክክለኛ ትንበያ ይሰጣል።',
    architectureRole: 'Core intelligence engine for Module 1 (Soil & Crop Recommender).',
    codeSnippet: `# Day 4: Training Random Forest Crop Recommendation Model
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
import joblib

# 1. Load Data
url = "https://raw.githubusercontent.com/glory-adebayo/Crop-Recommendation-Dataset/main/Crop_recommendation.csv"
df = pd.read_csv(url)
X = df.drop('label', axis=1)
y = df['label']

# 2. Train-Test Split (80% Train, 20% Test, stratified)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# 3. Train Random Forest Classifier
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# 4. Quick Inference Test on Sample Soil (Bishoftu soil example)
sample_soil = pd.DataFrame([{
    'N': 85, 'P': 45, 'K': 40,
    'temperature': 23.5, 'humidity': 80.2, 'ph': 6.5, 'rainfall': 210.0
}])

prediction = rf_model.predict(sample_soil)
confidence = rf_model.predict_proba(sample_soil).max() * 100

print(f"Recommended Crop: {prediction[0]}")
print(f"Model Confidence: {confidence:.2f}%")

# 5. Persist Model Artifact for Web Deployment
joblib.dump(rf_model, 'crop_recommendation_rf.pkl')
print("Model saved to crop_recommendation_rf.pkl successfully!")
`,
    codeExplanation: [
      {
        line: 'train_test_split(..., test_size=0.2, stratify=y)',
        explanation: 'Splits the 2200 rows into 1760 train and 440 test samples, ensuring equal class proportions.',
        explanationAmharic: 'ዳታውን ለስልጠና (80%) እና ለሙከራ (20%) እኩል ክፍፍል እንዲኖረው አድርጎ ይከፍላል።',
      },
      {
        line: 'rf_model = RandomForestClassifier(n_estimators=100)',
        explanation: 'Initializes an ensemble of 100 trees with bootstrap aggregation.',
        explanationAmharic: '100 የተለያዩ የውሳኔ ዛፎችን የሚያስተባብር የRandom Forest ሞዴል ያዘጋጃል።',
      },
      {
        line: 'joblib.dump(rf_model, "crop_recommendation_rf.pkl")',
        explanation: 'Serializes the trained weights to disk so our web server can load it instantly without retraining.',
        explanationAmharic: 'የሰለጠነውን ሞዴል በፋይል መልክ ያስቀምጣል፤ ይህም በStreamlit ወይም በዌብሳይት ላይ በቀላሉ እንድንጠቀምበት ያደርጋል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Random Forest Algorithm Clearly Explained',
        channel: 'StatQuest with Josh Starmer',
        query: 'StatQuest random forests decision trees step by step',
      },
      {
        title: 'Building a Machine Learning Model in Scikit-Learn',
        channel: 'Patrick Loeber / Krish Naik',
        query: 'scikit learn machine learning tutorial python Patrick Loeber',
      },
    ],
    quiz: {
      question: 'What is the key advantage of using Random Forest over a single Decision Tree for crop recommendation?',
      questionAmharic: 'ከአንድ ነጠላ Decision Tree ይልቅ Random Forest መጠቀም ዋነኛ ጥቅሙ ምንድን ነው?',
      options: [
        'Random Forest takes up less disk space',
        'Random Forest averages out individual tree variance, significantly reducing overfitting and increasing generalization accuracy',
        'Random Forest only works with text data',
        'Random Forest does not use Python',
      ],
      correctIndex: 1,
      explanation: 'Ensemble bagging averages the predictions of multiple diverse decision trees, neutralizing individual biases and noise in soil sensor data.',
      explanationAmharic: 'Random Forest የብዙ ዛፎችን ውሳኔ አማካኝ በማድረግ ስህተትን ይቀንሳል፣ ያልታዩ አዳዲስ የአፈር ናሙናዎችን በትክክል የመገመት አቅሙ በጣም የላቀ ነው።',
    },
  },
  {
    day: 5,
    phase: 2,
    phaseTitle: 'Phase 2: Building Core Machine Learning Models (Days 4–8)',
    title: 'Model Evaluation (Accuracy, Precision, Recall, Confusion Matrix) & Tuning',
    titleAmharic: 'ቀን 5፡ የሞዴል ብቃት ግምገማ (Accuracy, Precision, Confusion Matrix) እና Hyperparameter Tuning',
    durationHours: 3,
    objectives: [
      'Compute Accuracy, Precision, Recall, and F1-Score for multi-class classification',
      'Generate and interpret a 22x22 Confusion Matrix heatmap',
      'Inspect Feature Importances (Which features mattered most: Rainfall, N, P, or pH?)',
      'Tune hyperparameters (max_depth, min_samples_split) using GridSearchCV',
    ],
    objectivesAmharic: [
      'የሞዴሉን Accuracy፣ Precision፣ Recall እና F1-Score ማስላት',
      'Confusion Matrix በመጠቀም ሞዴሉ የትኞቹን ሰብሎች እንዳምታታ መመርመር',
      'የትኞቹ የአፈር ባህሪያት (Rainfall, N, P, pH) ከፍተኛ ተጽዕኖ እንዳላቸው ማየት',
      'የሞዴሉን ጥራት በGridSearchCV ማሻሻል',
    ],
    whyThisMatters:
      'High overall accuracy can hide critical class-specific failures (e.g. confusing Maize with Wheat). Evaluation metrics ensure fairness across all 22 crop varieties.',
    whyThisMattersAmharic:
      'አጠቃላይ ውጤቱ 99% ቢሆንም እንኳን አንዳንድ ተመሳሳይ ሰብሎች (ለምሳሌ በቆሎና ስንዴ) እንዳይቀላቀሉ Metrics በደንብ ማየት አስፈላጊ ነው።',
    architectureRole: 'Quality gate ensuring zero regression before production deployment.',
    codeSnippet: `# Day 5: Evaluating Model Performance & Feature Importances
import pandas as pd
from sklearn.metrics import classification_report, accuracy_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

url = "https://raw.githubusercontent.com/glory-adebayo/Crop-Recommendation-Dataset/main/Crop_recommendation.csv"
df = pd.read_csv(url)
X = df.drop('label', axis=1)
y = df['label']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)
print(f"Overall Test Accuracy: {acc * 100:.2f}%\\n")

# Top Feature Importances
importances = pd.Series(model.feature_importances_, index=X.columns).sort_values(ascending=False)
print("--- Feature Importance Ranking ---")
for feat, imp in importances.items():
    print(f"{feat:12s}: {imp * 100:.1f}%")
`,
    codeExplanation: [
      {
        line: 'accuracy_score(y_test, y_pred)',
        explanation: 'Compares unseen ground-truth labels with predictions to calculate true positive rates.',
        explanationAmharic: 'ሞዴሉ በፈተና ወቅት ያገኘውን ትክክለኛ የውጤት መቶኛ ያሰላል።',
      },
      {
        line: 'model.feature_importances_',
        explanation: 'Measures how much each feature decreases Gini impurity across all 100 decision trees.',
        explanationAmharic: 'ለሰብል መረጣው የትኛው የአፈር ወይም የአየር ሁኔታ ባህሪ ትልቅ ሚና እንደተጫወተ ያሳያል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Confusion Matrix, Precision & Recall Clearly Explained',
        channel: 'StatQuest with Josh Starmer',
        query: 'StatQuest confusion matrix precision recall sensitivity specificity',
      },
      {
        title: 'Hyperparameter Tuning with GridSearchCV',
        channel: 'Krish Naik',
        query: 'GridSearchCV hyperparameter tuning scikit learn Krish Naik',
      },
    ],
    quiz: {
      question: 'What does a high Feature Importance score for "Rainfall" indicate in our model?',
      questionAmharic: 'በሞዴላችን ውስጥ ለ"Rainfall" (የዝናብ መጠን) ከፍተኛ Importance መገኘቱ ምን ያሳያል?',
      options: [
        'Rainfall is the only feature that matters',
        'Rainfall provides the highest information gain / purity split across decision nodes when differentiating crops',
        'The rainfall data is corrupted',
        'It means it is currently raining outside',
      ],
      correctIndex: 1,
      explanation: 'Rainfall has the highest variance across crop families (e.g. Rice requires >200mm while Lentils require <50mm), providing massive discriminative power at top decision tree nodes.',
      explanationAmharic: 'የተለያዩ ሰብሎች የዝናብ ፍላጎት በጣም የተለያየ በመሆኑ (ለምሳሌ ሩዝ ከፍተኛ፣ ምስር አነስተኛ) ሞዴሉ በቀላሉ ሰብሎችን ለመለየት በዝናብ መጠን ላይ ይመሰረታል።',
    },
  },
  {
    day: 6,
    phase: 2,
    phaseTitle: 'Phase 2: Building Core Machine Learning Models (Days 4–8)',
    title: 'Weather & Climate Data Integration (OpenWeatherMap & NASA POWER APIs)',
    titleAmharic: 'ቀን 6፡ የአየር ሁኔታና የዝናብ መረጃዎችን በAPI ማገናኘት (OpenWeatherMap & NASA APIs)',
    durationHours: 3,
    objectives: [
      'Understand REST APIs, HTTP GET requests, and JSON parsing in Python',
      'Fetch real-time temperature, humidity, and 7-day rainfall forecasts using Python requests',
      'Connect geographical coordinates (Latitude/Longitude for Ethiopian agricultural zones)',
      'Create a reusable weather client function with error handling and fallback caches',
    ],
    objectivesAmharic: [
      'የREST API እና የJSON ዳታ አያያዝን በPython requests መረዳት',
      'የአንድን አካባቢ የአየር ሙቀት፣ እርጥበትና የ7 ቀን የዝናብ ትንበያ በAPI መሳብ',
      'የኢትዮጵያ የግብርና ዞኖችን (ቢሾፍቱ፣ ባህርዳር፣ ሐዋሳ፣ መቀሌ) መጋጠሚያዎች (Coords) መጠቀም',
      'ኢንተርኔት ቢቋረጥም የማይቆም አስተማማኝ የWeather Client ፈንክሽን መገንባት',
    ],
    whyThisMatters:
      'Farmers don’t carry digital weather sensors in their pockets. Integrating automated weather APIs enables zero-friction inference using only farm coordinates.',
    whyThisMattersAmharic:
      'አርሶ አደሩ በእጁ የአየር መለኪያ መሳሪያ ስለማይኖረው፣ በአካባቢው መጋጠሚያ (GPS) የአየር ፀባዩን በራስ-ሰር ከሳተላይትና ከWeather API ማምጣት የስርዓቱን ጥቅም ያጎለብተዋል።',
    architectureRole: 'Automated live telemetry ingestion for Module 2 (Climate & Weather Predictor).',
    codeSnippet: `# Day 6: Agri-Smart Weather & Climate API Ingestion Engine
import requests
import json

def fetch_agri_climate_telemetry(city_name="Bishoftu", lat=8.75, lon=38.98):
    """
    Fetches real-time agro-meteorological metrics for precision planting.
    Demonstrates NASA POWER / Open-Meteo free API integration.
    """
    api_url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,rain&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"
    
    try:
        response = requests.get(api_url, timeout=5)
        response.raise_for_status()
        data = response.json()
        
        current = data.get('current', {})
        daily = data.get('daily', {})
        
        telemetry = {
            'location': city_name,
            'temperature_celsius': current.get('temperature_2m', 22.0),
            'humidity_percent': current.get('relative_humidity_2m', 60.0),
            'current_rain_mm': current.get('rain', 0.0),
            'forecast_7day_rainfall_mm': sum(daily.get('precipitation_sum', [15.0] * 7)),
            'status': 'SUCCESS'
        }
        return telemetry
    except Exception as e:
        print(f"API Warning (Using Fallback Cache): {e}")
        return {
            'location': city_name,
            'temperature_celsius': 22.5,
            'humidity_percent': 65.0,
            'current_rain_mm': 2.1,
            'forecast_7day_rainfall_mm': 95.0,
            'status': 'FALLBACK'
        }

# Execution
weather = fetch_agri_climate_telemetry("Bishoftu / Oromia", 8.75, 38.98)
print("--- Fetched Agro-Climate Telemetry ---")
print(json.dumps(weather, indent=2))
`,
    codeExplanation: [
      {
        line: 'requests.get(api_url, timeout=5)',
        explanation: 'Sends an asynchronous HTTP GET request with a 5-second timeout to prevent hanging connections.',
        explanationAmharic: 'የአየር ሁኔታ መረጃዎችን በHTTP ጥያቄ ያመጣል፤ ሰርቨሩ ካልመለሰ በ5 ሰከንድ ውስጥ ያቋርጣል።',
      },
      {
        line: 'data.get("current", {}) & sum(daily["precipitation_sum"])',
        explanation: 'Safely traverses JSON nested dictionaries and aggregates the 7-day rolling precipitation sum.',
        explanationAmharic: 'የመጣውን የJSON ዳታ በመበተን የ7ቱን ቀናት ድምር የዝናብ መጠን ያሰላል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Python API Requests & JSON Parsing in 15 Minutes',
        channel: 'Tech With Tim / Corey Schafer',
        query: 'python requests library api tutorial json parsing beginners',
      },
      {
        title: 'OpenWeatherMap API Integration with Python',
        channel: 'freeCodeCamp',
        query: 'weather api python project openweathermap freecodecamp',
      },
    ],
    quiz: {
      question: 'Why should every production API request implement a `timeout` parameter and try-except block?',
      questionAmharic: 'በPython የAPI ጥያቄ ስንልክ ሁልጊዜ `timeout` እና try-except መጠቀም ለምን ያስፈልጋል?',
      options: [
        'It speeds up the user’s internet speed',
        'To prevent the entire application from freezing indefinitely if the remote weather server goes down or times out',
        'Because Python requires it to run print statements',
        'To encrypt the password',
      ],
      correctIndex: 1,
      explanation: 'Without a timeout and error handling, an unresponsive external API will block the main thread forever, bringing down the entire user interface.',
      explanationAmharic: 'የውጭ API ቢቋረጥ አጠቃላይ አፕሊኬሽኑ እንዳይቆም (freeze እንዳያደርግ) እና ፈጣን አማራጭ (fallback) እንዲጠቀም ያደርጋል።',
    },
  },
  {
    day: 7,
    phase: 2,
    phaseTitle: 'Phase 2: Building Core Machine Learning Models (Days 4–8)',
    title: 'Rule-Based Predictive Logic for Optimal Planting Time Schedules',
    titleAmharic: 'ቀን 7፡ ትክክለኛውን የመዝሪያ ጊዜ የሚተነብይ የሎጂክ ኢንጂን (Optimal Planting Advisor)',
    durationHours: 3,
    objectives: [
      'Model soil moisture triggers and thermal time requirements (Growing Degree Days)',
      'Construct deterministic agronomic rule trees combining weather forecasts with soil types',
      'Calculate optimal 10-day planting windows (Early, Ideal, Delayed) to minimize seedling loss',
      'Generate risk flags for unseasonal frost, prolonged dry spells, and waterlogging',
    ],
    objectivesAmharic: [
      'የአፈር እርጥበትና የሙቀት መጠን ለዘር መብቀል የሚያስፈልገውን መስፈርት መረዳት',
      'የአየር ትንበያውንና የአፈር አይነትን አጣምሮ የሚሰራ የውሳኔ ሎጂክ መገንባት',
      'ምርጥ የ10 ቀናት የመዝሪያ መስኮትን (Planting Window) ማስላት',
      'ያልተጠበቀ ድርቅ ወይም የጎርፍ አደጋ ካለ አስቀድሞ ማስጠንቀቂያ ማመንጨት',
    ],
    whyThisMatters:
      'Even with the right crop recommendation, planting seeds 10 days too early or too late in dry soil kills up to 40% of seedling germination. Predictive scheduling protects farmers’ investments.',
    whyThisMattersAmharic:
      'ትክክለኛውን ሰብል ብንመርጥም እንኳን ዘሩን ከትክክለኛው ጊዜ ቀድሞ ወይም አርፍዶ መዝራት እስከ 40% ምርት ያሳጣል፤ ስለዚህ ትክክለኛውን ቀን መተንበይ ወሳኝ ነው።',
    architectureRole: 'Domain-specific decision engine for Module 3 (Optimal Planting Advisor).',
    codeSnippet: `# Day 7: Rule-Based Optimal Planting Schedule Calculator
from datetime import datetime, timedelta

def calculate_optimal_planting_window(crop_name, soil_type, forecast_7day_rain, avg_temp):
    """
    Determines precision planting readiness based on agronomic thresholds.
    """
    recommendation = {}
    today = datetime.now()
    
    # Agronomic thresholds per crop
    crop_requirements = {
        'Teff': {'min_rain': 40, 'min_temp': 16, 'max_temp': 28, 'germination_days': 4},
        'Maize': {'min_rain': 60, 'min_temp': 18, 'max_temp': 32, 'germination_days': 6},
        'Wheat': {'min_rain': 45, 'min_temp': 14, 'max_temp': 25, 'germination_days': 5},
        'Rice': {'min_rain': 120, 'min_temp': 22, 'max_temp': 35, 'germination_days': 7},
    }
    
    req = crop_requirements.get(crop_name, {'min_rain': 50, 'min_temp': 18, 'max_temp': 30, 'germination_days': 5})
    
    # Logic Engine Decision Path
    if forecast_7day_rain < (req['min_rain'] * 0.4):
        status = "DELAY_PLANTING (ቆይተው ይዝሩ)"
        urgency = "High Risk of Seed Desiccation (የድርቅ ስጋት አለ)"
        start_date = today + timedelta(days=7)
        end_date = today + timedelta(days=14)
        guidance = f"Low forecast rainfall ({forecast_7day_rain:.1f}mm). Wait for soil moisture recharge before sowing {crop_name}."
    elif avg_temp < req['min_temp']:
        status = "SOIL_TOO_COLD (አፈሩ ቀዝቃዛ ነው)"
        urgency = "Risk of Delayed Germination"
        start_date = today + timedelta(days=5)
        end_date = today + timedelta(days=12)
        guidance = f"Average temperature ({avg_temp}°C) is below minimum {req['min_temp']}°C threshold."
    else:
        status = "IDEAL_PLANTING_WINDOW (አሁን ምርጥ የመዝሪያ ጊዜ ነው)"
        urgency = "Optimal Conditions (ተስማሚ ሁኔታ)"
        start_date = today + timedelta(days=1)
        end_date = today + timedelta(days=6)
        guidance = f"Optimal soil moisture ({forecast_7day_rain:.1f}mm rain) & temperature ({avg_temp}°C) detected."

    return {
        'crop': crop_name,
        'status': status,
        'urgency': urgency,
        'recommended_window': f"{start_date.strftime('%b %d')} - {end_date.strftime('%b %d')}",
        'agronomic_guidance': guidance
    }

# Test with Maize in Bishoftu
advice = calculate_optimal_planting_window("Maize", "Clay Loam", forecast_7day_rain=85.0, avg_temp=22.5)
print(f"Crop: {advice['crop']} | Status: {advice['status']}")
print(f"Optimal Window: {advice['recommended_window']}")
print(f"Guidance: {advice['agronomic_guidance']}")
`,
    codeExplanation: [
      {
        line: 'crop_requirements = { "Teff": {...}, ... }',
        explanation: 'Defines domain-specific biophysical rules for soil moisture and temperature tolerances.',
        explanationAmharic: 'ለእያንዳንዱ ሰብል አስፈላጊውን ዝቅተኛ የዝናብ መጠንና የሙቀት መጠን ደንቦች ይይዛል።',
      },
      {
        line: 'if forecast_7day_rain < req["min_rain"] * 0.4:',
        explanation: 'Calculates the moisture deficiency threshold to prevent sowing in dry soil beds.',
        explanationAmharic: 'የሚጠበቀው ዝናብ አነስተኛ ከሆነ ዘሩ በአፈር ውስጥ እንዳይደርቅ የመዝሪያ ቀኑ እንዲራዘም ይመክራል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Building Rule-Based Expert Systems in Python',
        channel: 'Computerphile / Tech With Tim',
        query: 'expert systems rule based python decision engine agriculture',
      },
      {
        title: 'Crop Modeling & Growing Degree Days (GDD)',
        channel: 'Agronomy Concepts',
        query: 'growing degree days GDD planting date calculation agronomy',
      },
    ],
    quiz: {
      question: 'Why do we combine ML predictions (Day 4) with Rule-Based Logic (Day 7) rather than relying purely on one?',
      questionAmharic: 'ከአንድ ሞዴል ብቻ ይልቅ የማሽን ለርኒንግ (ML) እና የደንብ ሎጂክን (Rule-Based Logic) ማጣመር ለምን ተመራጭ ሆነ?',
      options: [
        'Because ML algorithms cannot do math',
        'Hybrid AI combines statistical pattern recognition (matching soil types to crops) with strict deterministic agronomic safeguards (weather constraints & planting calendar)',
        'Because rules make the code run slower',
        'To write twice as many lines of code',
      ],
      correctIndex: 1,
      explanation: 'Hybrid AI architectures leverage ML for high-dimensional feature matching while utilizing deterministic rule guards to prevent catastrophic biological violations (such as planting before rain).',
      explanationAmharic: 'ሁለቱን ማጣመር የማሽን ለርኒንግን የማዛመድ አቅም ከትክክለኛ የግብርና ህጎችና የአየር ትንበያዎች ጋር አስተማማኝ ያደርገዋል።',
    },
  },
  {
    day: 8,
    phase: 2,
    phaseTitle: 'Phase 2: Building Core Machine Learning Models (Days 4–8)',
    title: 'Generative AI & LLM Integration (Gemini API) for Crop Care & Pest Advice',
    titleAmharic: 'ቀን 8፡ Generative AI (Gemini API) ማገናኘት፡ የበሽታና የማዳበሪያ አጠቃቀም አማካሪ (Crop Care Agent)',
    durationHours: 3.5,
    objectives: [
      'Understand Large Language Models (LLMs) vs. Classical Supervised ML',
      'Connect @google/genai SDK in a secure server-side environment',
      'Design structured prompt engineering templates for agricultural pest diagnosis',
      'Implement multi-lingual (Amharic & English) structured outputs with treatment dosages',
    ],
    objectivesAmharic: [
      'የGenerative AI (LLMs) እና የጥንታዊ Supervised ML ልዩነትን መረዳት',
      'የGoogle GenAI SDK ን በሰርቨር በኩል በአስተማማኝ ሁኔታ ማገናኘት',
      'ለሰብል በሽታዎችና ማዳበሪያ አጠቃቀም ተስማሚ የPrompt Engineering አሰራር መዘርጋት',
      'በአማርኛና በእንግሊዝኛ ትክክለኛ የመድኃኒት መጠን የሚሰጥ መልስ ማመንጨት',
    ],
    whyThisMatters:
      'Classical ML is great for tabular classification, but only an LLM can understand nuanced natural-language farmer queries ("My maize leaves have yellow stripes and holes") and synthesize customized agronomic advice.',
    whyThisMattersAmharic:
      'ክላሲካል ML ለቁጥሮች ቢመችም፣ አርሶ አደሩ የሚያጋጥመውን በሽታ በቃላት ሲያስረዳ (ለምሳሌ "የበቆሎዬ ቅጠል ቢጫ ሆኗል") ተረድቶ መፍትሔ ለመስጠት LLM (Gemini) ወደር የለውም።',
    architectureRole: 'Natural language reasoning engine for Module 4 (Crop Care & Chemical Guidance Agent).',
    codeSnippet: `# Day 8: Gemini Agri-Care Expert Advisor Integration
import os
# Server-side integration pattern
from google import genai

client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

def get_crop_care_guidance(crop="Maize", symptoms="Stunted growth and yellow lower leaves", soil="Clay Loam, pH 6.0"):
    prompt = f"""
    Act as a Lead Agronomist. Diagnose and recommend treatment for:
    Crop: {crop}
    Observed Symptoms: {symptoms}
    Soil: {soil}

    Provide output in Amharic with technical English terms:
    1. Root Cause Diagnosis (የችግሩ መነሻ)
    2. Immediate Action Plan (አፋጣኝ መፍትሔ)
    3. Fertilizer / Chemical Dosage (የማዳበሪያና ኬሚካል መጠን በሄክታር)
    4. Long-term Prevention (የወደፊት መከላከያ)
    """

    response = client.models.generate_content(
        model='gemini-3.7-flash',
        contents=prompt,
    )
    return response.text

print("--- Gemini Agri-Care Advisor Response ---")
# advice = get_crop_care_guidance("Maize", "Yellow leaves with leaf blight spots")
# print(advice)
`,
    codeExplanation: [
      {
        line: 'from google import genai; client = genai.Client(...)',
        explanation: 'Initializes the official modern Google GenAI SDK client.',
        explanationAmharic: 'ዘመናዊውን የGoogle GenAI SDK ደህንነቱ በተጠበቀ ሁኔታ ያስጀምራል።',
      },
      {
        line: 'model="gemini-3.7-flash"',
        explanation: 'Selects the ultra-fast, high-reasoning Gemini 3.7 Flash model.',
        explanationAmharic: 'ፈጣንና ጥልቅ ትንታኔ የሚሰጠውን Gemini 3.7 Flash ሞዴል ይመርጣል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Google Gemini API with Python Complete Tutorial',
        channel: 'Krish Naik / FreeCodeCamp',
        query: 'google genai python sdk gemini api tutorial Krish Naik',
      },
      {
        title: 'Prompt Engineering for Developers',
        channel: 'DeepLearning.AI / Andrew Ng',
        query: 'prompt engineering for developers Andrew Ng',
      },
    ],
    quiz: {
      question: 'Why must API keys like GEMINI_API_KEY be kept strictly on the backend/server rather than in client-side browser code?',
      questionAmharic: 'የGEMINI_API_KEY በBrowser/Frontend ኮድ ውስጥ ሳይሆን በሰርቨር ላይ ብቻ መያዝ ያለበት ለምንድን ነው?',
      options: [
        'Because JavaScript does not know how to read English keys',
        'Any secret key in browser code can be inspected and stolen by any user via browser DevTools, leading to quota exhaustion and security breach',
        'Because servers have bigger hard drives',
        'Because keys expire faster on browsers',
      ],
      correctIndex: 1,
      explanation: 'Browser client-side code is completely public. Storing API keys in frontend assets allows malicious actors to extract them from network tabs or source code.',
      explanationAmharic: 'በBrowser ላይ ያለ ማንኛውም ኮድ በDevTools በቀላሉ ስለሚታይ ቁልፉ እንዳይሰረቅና አላስፈላጊ ወጪ እንዳያስከትል በሰርቨር በኩል ብቻ መደረግ አለበት።',
    },
  },
  // --- PHASE 3 ---
  {
    day: 9,
    phase: 3,
    phaseTitle: 'Phase 3: Frontend & Application Integration (Days 9–12)',
    title: 'Streamlit Fundamentals (Interactive Sliders, Forms, & Layouts)',
    titleAmharic: 'ቀን 9፡ የStreamlit መሠረቶች (የአፈር መረጃ መቀበያ Sliders፣ Forms እና ዳሽቦርድ መገንባት)',
    durationHours: 3,
    objectives: [
      'Learn Streamlit reactive state management and execution lifecycle',
      'Build numeric input sliders for N, P, K, pH, and climate metrics',
      'Create responsive multi-column dashboard layouts with st.columns()',
      'Display agricultural data charts and metrics with st.metric()',
    ],
    objectivesAmharic: [
      'የStreamlit አሰራርና State Management መረዳት',
      'ለአፈር ንጥረ-ነገሮች (N, P, K, pH) መምረጫ Sliders እና የፎርም ገጾችን መገንባት',
      'በቀላሉ የሚታዩ ባለብዙ ኮለም ዳሽቦርዶችን በst.columns() ማዘጋጀት',
      'የአፈር መረጃዎችን የሚያሳዩ ግራፎችንና የMetric ካርዶችን ማሳየት',
    ],
    whyThisMatters:
      'Streamlit allows ML engineers to turn pure Python data scripts into interactive, polished web apps in minutes without requiring complex JavaScript frameworks.',
    whyThisMattersAmharic:
      'Streamlit ውስብስብ የFrontend ኮድ ሳያስፈልግ የሰራነውን የPython ሞዴል በቀላሉ ወደ ማራኪ የዌብ መተግበሪያ ለመቀየር ያስችላል።',
    architectureRole: 'UI presentation layer for the entire Agri-Smart AI suite.',
    codeSnippet: `# Day 9: Streamlit Agricultural Dashboard Prototype (app.py)
import streamlit as st
import pandas as pd

st.set_page_config(page_title="Agri-Smart AI System", page_icon="🌱", layout="wide")

st.title("🌱 Agri-Smart AI System - Precision Agriculture Portal")
st.markdown("### Welcome Melaku! Enter your soil & climate telemetry below:")

col1, col2 = st.columns(2)

with col1:
    st.subheader("🧪 Soil Nutrient Analysis (አፈር ምርመራ)")
    n = st.slider("Nitrogen (N) [mg/kg]", min_value=0, max_value=140, value=75)
    p = st.slider("Phosphorus (P) [mg/kg]", min_value=5, max_value=145, value=45)
    k = st.slider("Potassium (K) [mg/kg]", min_value=5, max_value=205, value=35)
    ph = st.slider("Soil pH Level", min_value=3.5, max_value=9.5, value=6.5, step=0.1)

with col2:
    st.subheader("🌦️ Climate Forecast (የአየር ሁኔታ)")
    temp = st.slider("Temperature (°C)", min_value=8.0, max_value=45.0, value=23.0)
    hum = st.slider("Relative Humidity (%)", min_value=10.0, max_value=100.0, value=65.0)
    rain = st.slider("Expected Rainfall (mm)", min_value=20.0, max_value=300.0, value=110.0)

st.success(f"Configured Profile: N={n}, P={p}, K={k}, pH={ph} | Rain={rain}mm")
`,
    codeExplanation: [
      {
        line: 'st.set_page_config(layout="wide")',
        explanation: 'Configures full-width responsive viewport for multi-column dashboards.',
        explanationAmharic: 'የዌብ ገጹን ስፋትና ርዕስ ለተጠቃሚው ምቹ እንዲሆን ያስተካክላል።',
      },
      {
        line: 'st.slider(...) & st.columns(2)',
        explanation: 'Renders reactive UI inputs arranged in clean side-by-side grids.',
        explanationAmharic: 'ተጠቃሚው የአፈርና የአየር መረጃዎችን በቀላሉ የሚመርጥባቸውን Sliders በ2 ክፍል ይከፍላል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Streamlit Python Crash Course for Data Science & ML',
        channel: 'FreeCodeCamp / Data Professor',
        query: 'streamlit python crash course data science web app beginner',
      },
    ],
    quiz: {
      question: 'How does Streamlit handle state updates when a user drags a slider in the browser?',
      questionAmharic: 'አንድ ተጠቃሚ በStreamlit ላይ Slider ሲያንቀሳቅስ Streamlit እንዴት ይሰራል?',
      options: [
        'It sends an email to the server',
        'It reruns the Python script from top to bottom with the new slider value, updating the reactive UI components instantly',
        'It closes the browser tab',
        'It deletes the Python script',
      ],
      correctIndex: 1,
      explanation: 'Streamlit operates on a reactive execution model: every widget interaction reruns the script top-to-bottom while preserving session state.',
      explanationAmharic: 'Streamlit ተጠቃሚው Slider ሲቀይር ኮዱን ከላይ ወደ ታች በቅጽበት በማስኬድ ውጤቱን በስክሪኑ ላይ ያድሳል።',
    },
  },
  {
    day: 10,
    phase: 3,
    phaseTitle: 'Phase 3: Frontend & Application Integration (Days 9–12)',
    title: 'Connecting Trained ML Models + Weather API + Gemini into the Web App',
    titleAmharic: 'ቀን 10፡ ሁሉንም ሞዴሎች (ML + Weather API + Gemini AI) ወደ አንድ ወጥ አፕሊኬሽን ማስተሳሰር',
    durationHours: 4,
    objectives: [
      'Load the persisted joblib ML model into the Streamlit session state',
      'Wire the Weather API to auto-fill climate inputs when an Ethiopian city is chosen',
      'Integrate the Gemini Crop Care advisor with live markdown streaming',
      'Build a unified 4-module dashboard with interactive tabs',
    ],
    objectivesAmharic: [
      'ቀደም ሲል ሴቭ የተደረገውን የML ሞዴል በStreamlit ውስጥ መጫን',
      'የኢትዮጵያ ከተማ ሲመረጥ Weather API የአየር ሁኔታውን በራሱ እንዲሞላ ማድረግ',
      'የGemini የበሽታ አማካሪን ከአፕሊኬሽኑ ጋር ማገናኘት',
      'ሁሉንም 4 ሞጁሎች በአንድ ገጽ ላይ በተደራጀ መልኩ ማቅረብ',
    ],
    whyThisMatters:
      'Individual ML models in Jupyter notebooks have zero business value until integrated into a cohesive end-user application that solves the farmer’s workflow end-to-end.',
    whyThisMattersAmharic:
      'በJupyter ላይ ብቻ የተቀመጠ ሞዴል ለአርሶ አደሩ አይደርስም፤ ሁሉንም ክፍሎች በአንድ ወጥ መተግበሪያ ማገናኘት ሙሉ ምርት (Product) ያደርገዋል።',
    architectureRole: 'Full-system integration connecting all pipeline nodes into a live UI.',
    codeSnippet: `# Day 10: Unified End-to-End Agri-Smart System Pipeline
import streamlit as st
import joblib
import pandas as pd

# Load ML Model with Caching to prevent reloading on every rerun
@st.cache_resource
def load_ml_model():
    return joblib.load('crop_recommendation_rf.pkl')

st.title("🌱 Unified Agri-Smart AI Platform")

tab1, tab2, tab3, tab4 = st.tabs([
    "🌾 1. Crop Recommender",
    "🌦️ 2. Weather & Climate",
    "📅 3. Planting Advisor",
    "🩺 4. Gemini Crop Care"
])

with tab1:
    st.header("Soil-to-Crop Machine Learning Engine")
    # Interactive inference pipeline
    # ...
`,
    codeExplanation: [
      {
        line: '@st.cache_resource',
        explanation: 'Decorator that memoizes heavy model objects in RAM across script reruns for sub-10ms inference.',
        explanationAmharic: 'ሞዴሉ በየሰከንዱ እንደገና እንዳይጫን በኮምፒውተሩ ሚሞሪ (RAM) ውስጥ አስቀምጦ ፈጣን ያደርገዋል።',
      },
      {
        line: 'tab1, tab2, tab3, tab4 = st.tabs(...)',
        explanation: 'Organizes the 4 system modules into clean, distinct operational views.',
        explanationAmharic: '4ቱን የስርዓቱን ሞጁሎች በንጹህ ታቦች (Tabs) ከፋፍሎ ያቀርባል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Deploying ML Models with Streamlit',
        channel: 'Patrick Loeber',
        query: 'deploy machine learning model streamlit python Patrick Loeber',
      },
    ],
    quiz: {
      question: 'Why is `@st.cache_resource` critical when loading heavy machine learning models in Streamlit?',
      questionAmharic: 'በStreamlit ውስጥ የML ሞዴሎችን ስንጭን `@st.cache_resource` ለምን ያስፈልጋል?',
      options: [
        'It changes the color of the UI',
        'It loads the model once into memory rather than reading from disk on every button click or slider movement',
        'It compresses the screen size',
        'It translates English to Amharic',
      ],
      correctIndex: 1,
      explanation: 'Without caching, Streamlit would read the `.pkl` file from disk on every single user interaction, causing massive UI lag and high CPU consumption.',
      explanationAmharic: 'ተጠቃሚው በነካ ቁጥር ሞዴሉ ከዲስክ ተመልሶ እንዳይነበብና አፑ እንዳይዘገይ አንድ ጊዜ ብቻ ሚሞሪ ላይ ጫኖ ያስቀምጣል።',
    },
  },
  {
    day: 11,
    phase: 3,
    phaseTitle: 'Phase 3: Frontend & Application Integration (Days 9–12)',
    title: 'Voice & Speech Accessibility (Text-to-Speech / Audio Output for Farmers)',
    titleAmharic: 'ቀን 11፡ የድምፅና ንግግር (Text-to-Speech / Audio) ቴክኖሎጂን ለአርሶ አደሩ ተደራሽ ማድረግ',
    durationHours: 3,
    objectives: [
      'Understand Text-to-Speech (TTS) pipelines using gTTS and Web Speech Synthesis',
      'Generate spoken audio advisories in Amharic & English for non-literate farmers',
      'Integrate an interactive audio playback widget in the web app',
      'Implement voice prompt input transcription via microphone APIs',
    ],
    objectivesAmharic: [
      'የText-to-Speech (TTS) አሰራርን በgTTS እና በWeb Speech APIs መረዳት',
      'ማንበብ ለማይችሉ አርሶ አደሮች የምክር አገልግሎቱን በድምፅ (Amharic Audio) ማመንጨት',
      'በአፕሊኬሽኑ ላይ የድምፅ ማጫወቻ ቁልፍ (Audio Player) ማካተት',
      'በማይክሮፎን ድምፅን ተቀብሎ ወደ ጽሑፍ የሚቀይር አሰራር መተግበር',
    ],
    whyThisMatters:
      'Over 60% of rural smallholder farmers face literacy barriers. Voice audio outputs transform an academic AI model into a practical, accessible lifesaver in the field.',
    whyThisMattersAmharic:
      'በርካታ የገጠር አርሶ አደሮች ጽሑፍ የማንበብ ችግር ሊኖርባቸው ስለሚችል፣ የምክሩን ውጤት በድምፅ ማቅረብ ቴክኖሎጂውን ለሁሉም ተደራሽ ያደርገዋል።',
    architectureRole: 'Accessibility interface in Module 5 (Speech & Local Language UI).',
    codeSnippet: `# Day 11: Text-to-Speech (TTS) Integration for Agri-Advisories
import io
from gtts import gTTS
import streamlit as st

def generate_voice_advisory(text_message, lang='am'):
    """
    Generates spoken audio stream for rural agricultural advisories.
    Supports 'am' (Amharic) and 'en' (English).
    """
    try:
        tts = gTTS(text=text_message, lang=lang, slow=False)
        audio_buffer = io.BytesIO()
        tts.write_to_fp(audio_buffer)
        audio_buffer.seek(0)
        return audio_buffer
    except Exception as e:
        print(f"TTS Generation Error: {e}")
        return None

# Streamlit Voice Advisory UI
advisory_text = "ለአፈሩ ተስማሚው ሰብል በቆሎ ነው። የሚዘራበት ምርጥ ጊዜ ከሐምሌ 5 እስከ 12 ነው።"
audio_data = generate_voice_advisory(advisory_text, lang='am')

if audio_data:
    st.audio(audio_data, format="audio/mp3")
    st.caption("🔊 የድምፅ ምክር (Voice Advisory in Amharic)")
`,
    codeExplanation: [
      {
        line: 'gTTS(text=text_message, lang="am")',
        explanation: 'Synthesizes Amharic phonetic text into clean audio waveforms.',
        explanationAmharic: 'የአማርኛ ጽሑፉን ወደ ተፈጥሯዊ የድምፅ ንግግር ይቀይራል።',
      },
      {
        line: 'st.audio(audio_data, format="audio/mp3")',
        explanation: 'Embeds an HTML5 audio player widget inside the web dashboard.',
        explanationAmharic: 'በዌብሳይቱ ላይ አርሶ አደሩ ድምፁን በቀላሉ የሚያዳምጥበትን ማጫወቻ ያቀርባል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Python Text-to-Speech (gTTS & pyttsx3) Complete Guide',
        channel: 'Tech With Tim',
        query: 'python text to speech gtts tutorial speech synthesis',
      },
    ],
    quiz: {
      question: 'Why is in-memory audio buffering (using io.BytesIO) preferred over saving temporary .mp3 files to disk in web servers?',
      questionAmharic: 'የድምፅ ፋይሎችን በሃርድ ድራይቭ ላይ ከመጻፍ ይልቅ በMemory (io.BytesIO) ማዘጋጀት ለምን ይመረጣል?',
      options: [
        'Because MP3 files are illegal on servers',
        'In-memory streams prevent disk I/O bottlenecks, avoid file permission errors, and prevent disk storage bloat from concurrent users',
        'Because memory is cheaper than monitors',
        'It makes the audio louder',
      ],
      correctIndex: 1,
      explanation: 'Serving audio directly from RAM streams eliminates disk read/write contention, prevents concurrency locking bugs, and leaves zero leftover files.',
      explanationAmharic: 'የድምፅ ፋይሉ በቀጥታ ከሚሞሪ (RAM) ስለሚጫወት ሰርቨሩን አያጨናንቅም፣ የዲስክ ቦታ አይሞላም እንዲሁም እጅግ ፈጣን ነው።',
    },
  },
  {
    day: 12,
    phase: 3,
    phaseTitle: 'Phase 3: Frontend & Application Integration (Days 9–12)',
    title: 'Testing, Error Handling, Edge Cases & Validation Guards',
    titleAmharic: 'ቀን 12፡ የአፕሊኬሽን ሙከራ (Testing)፣ የስህተት መከላከያ (Error Handling) እና Edge Cases',
    durationHours: 3,
    objectives: [
      'Implement boundary validation (e.g. soil pH < 0 or > 14, negative rainfall)',
      'Handle API rate limits, timeouts, and network disconnection states gracefully',
      'Write automated unit tests using pytest for core recommendation functions',
      'Create helpful user-facing error banners and fallback defaults',
    ],
    objectivesAmharic: [
      'የተሳሳተ የአፈር መረጃ እንዳይገባ ድንበሮችን መገደብ (ለምሳሌ pH ከ0 በታች ወይም ከ14 በላይ)',
      'የኢንተርኔት መቋረጥ ወይም የAPI መዘግየት ሲያጋጥም አፑ እንዳይዘጋ ማድረግ',
      'በpytest አማካኝነት ለዋና ዋና ፈንክሽኖች የሙከራ ኮድ (Unit Tests) መጻፍ',
      'ለተጠቃሚው ግልጽ የማስጠንቀቂያና የመመሪያ መልዕክቶችን ማዘጋጀት',
    ],
    whyThisMatters:
      'A great AI model that crashes when a user enters "0" or when WiFi disconnects is unusable. Defensive programming guarantees 99.9% application uptime in remote areas.',
    whyThisMattersAmharic:
      'ተጠቃሚው ያልተጠበቀ ቁጥር ሲያስገባ ወይም ኔትወርክ ሲቋረጥ አፑ ዝም ብሎ እንዳይዘጋ የሚያደርግ ጥንካሬ መስጠት ለስራ ዝግጁ ያደርገዋል።',
    architectureRole: 'Robustness and resilience layer across all services.',
    codeSnippet: `# Day 12: Defensive Input Validation & Unit Testing
def validate_soil_telemetry(n, p, k, ph, rainfall):
    """
    Guards against out-of-bound sensor inputs and malicious values.
    """
    errors = []
    if not (0 <= n <= 200):
        errors.append("Nitrogen (N) must be between 0 and 200 mg/kg.")
    if not (0 <= p <= 200):
        errors.append("Phosphorus (P) must be between 0 and 200 mg/kg.")
    if not (0 <= k <= 250):
        errors.append("Potassium (K) must be between 0 and 250 mg/kg.")
    if not (3.0 <= ph <= 10.0):
        errors.append("Soil pH must be biologically viable (between 3.0 and 10.0).")
    if rainfall < 0:
        errors.append("Rainfall cannot be negative.")
        
    return len(errors) == 0, errors

# Test Execution
is_valid, error_list = validate_soil_telemetry(n=80, p=45, k=40, ph=6.5, rainfall=-10)
print(f"Validation Passed: {is_valid}")
if not is_valid:
    print(f"Detected Errors: {error_list}")
`,
    codeExplanation: [
      {
        line: 'if not (3.0 <= ph <= 10.0): ...',
        explanation: 'Enforces strict biophysical boundaries so garbage inputs are rejected before hitting the ML model.',
        explanationAmharic: 'የገባው መረጃ ምክንያታዊ የአፈር ባህሪ መሆኑን ያጣራል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Python Unit Testing with Pytest Tutorial',
        channel: 'Corey Schafer / ArjanCodes',
        query: 'pytest python tutorial unit testing beginners ArjanCodes',
      },
    ],
    quiz: {
      question: 'What is the primary objective of Defensive Programming in Machine Learning systems?',
      questionAmharic: 'በማሽን ለርኒንግ ሲስተሞች ውስጥ Defensive Programming ዋነኛ አላማው ምንድን ነው?',
      options: [
        'To make the computer fight viruses with swords',
        'To anticipate failure modes, sanitize user inputs, and provide graceful fallbacks so the system never crashes abruptly in production',
        'To write code faster by skipping comments',
        'To increase GPU temperature',
      ],
      correctIndex: 1,
      explanation: 'Defensive programming anticipates real-world failures (network drops, sensor glitches, bad inputs) and handles them gracefully with informative feedback.',
      explanationAmharic: 'ያልተጠበቁ ስህተቶች፣ የተሳሳቱ ቁጥሮችና የኔትወርክ መቋረጦች ሲፈጠሩ አፑ ሳይዘጋ በረጋ ሁኔታ መፍትሔ እንዲሰጥ ማድረግ ነው።',
    },
  },
  // --- PHASE 4 ---
  {
    day: 13,
    phase: 4,
    phaseTitle: 'Phase 4: Deployment & Final Presentation (Days 13–15)',
    title: 'Code Modularization, requirements.txt & Git Architecture',
    titleAmharic: 'ቀን 13፡ ኮድን በሞጁል ማደራጀት (Clean Architecture)፣ requirements.txt እና Git Repository',
    durationHours: 3,
    objectives: [
      'Refactor monolithic scripts into modular packages (utils, models, views)',
      'Generate a pin-locked requirements.txt file using pip freeze',
      'Create a production .gitignore to exclude .pkl models, .venv, and __pycache__',
      'Initialize Git version control and push code to GitHub',
    ],
    objectivesAmharic: [
      'የተዘበራረቀ ኮድን ወደ ንጹህና የተደራጁ ፋይሎች (modules) መከፋፈል',
      'የሚያስፈልጉ ፓኬጆችን ዝርዝር የያዘ requirements.txt ፋይል ማዘጋጀት',
      'የማያስፈልጉ ፋይሎችን ወደ Git እንዳይገቡ .gitignore ማዘጋጀት',
      'የGit Version Control በመጠቀም ፕሮጀክቱን ወደ GitHub መጫን',
    ],
    whyThisMatters:
      'Professional AI engineers do not push 10,000-line single files. Clean directory architectures make code maintainable, testable, and ready for CI/CD cloud pipelines.',
    whyThisMattersAmharic:
      'ኮድን በንጹህ አቃፊዎች (Folders) ማደራጀት ለቡድን ስራ፣ ለክትትልና ለCloud ጭነት ወሳኝ የፕሮፌሽናል ኢንጂነር መገለጫ ነው።',
    architectureRole: 'Repository structure and dependency manifest for deployment.',
    codeSnippet: `# Day 13: Recommended Production Agri-Smart Directory Structure
#
# agri_smart_ai/
# ├── .gitignore
# ├── requirements.txt
# ├── README.md
# ├── app.py                 # Streamlit UI Entry Point
# ├── config.py              # Environment and Constants
# ├── models/
# │   ├── train_model.py     # Training Pipeline
# │   └── crop_rf_model.pkl  # Serialized Model
# ├── modules/
# │   ├── __init__.py
# │   ├── soil_recommender.py
# │   ├── weather_engine.py
# │   ├── planting_advisor.py
# │   └── gemini_agent.py
# └── tests/
#     └── test_pipeline.py

# requirements.txt snippet:
# streamlit>=1.30.0
# scikit-learn>=1.3.0
# pandas>=2.0.0
# numpy>=1.24.0
# requests>=2.31.0
# google-genai>=2.4.0
# gtts>=2.4.0
# joblib>=1.3.0
`,
    codeExplanation: [
      {
        line: '├── modules/ ...',
        explanation: 'Separates business logic and machine learning algorithms from UI rendering components.',
        explanationAmharic: 'የማሽን ለርኒንግ ሎጂኩን ከዌብ ገጹ ለይቶ በተናጠል እንዲሰራ ያደርጋል።',
      },
      {
        line: 'requirements.txt',
        explanation: 'Enables cloud platforms to auto-install exact dependency versions with zero manual setup.',
        explanationAmharic: 'Cloud ላይ ስንጭን ሁሉም አስፈላጊ ላይብረሪዎች በራሳቸው እንዲጫኑ ያደርጋል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Python Project Structure & Git for Beginners',
        channel: 'Corey Schafer / Tech With Tim',
        query: 'python project structure best practices git github tutorial',
      },
    ],
    quiz: {
      question: 'Why should virtual environment folders (like `.venv/` or `env/`) ALWAYS be included in `.gitignore`?',
      questionAmharic: 'የVirtual Environment ፎልደሮች (`.venv/`) ሁልጊዜ በ`.gitignore` ውስጥ መካተት ያለባቸው ለምንድን ነው?',
      options: [
        'Because git cannot read folders with dots',
        'Virtual environments contain thousands of platform-specific binary files (gigabytes) that must be rebuilt via requirements.txt, not tracked in source control',
        'Because it deletes your code',
        'To make git faster on Mondays',
      ],
      correctIndex: 1,
      explanation: 'Virtual environments are machine-specific binaries. Tracking them in Git bloats the repo by gigabytes and causes platform incompatibilities when cloned by others.',
      explanationAmharic: 'Virtual Environment በርካታ የኮምፒውተርዎን ብቻ የሆኑ ፋይሎች ስለሚይዝ የGit ቦታን ከማጨናነቅ ውጪ ለሌላ ሰው አይሰራም፤ ሌላ ሰው በrequirements.txt በቀላሉ ይጭነዋል።',
    },
  },
  {
    day: 14,
    phase: 4,
    phaseTitle: 'Phase 4: Deployment & Final Presentation (Days 13–15)',
    title: 'Live Cloud Deployment (Deploying to Streamlit Community Cloud)',
    titleAmharic: 'ቀን 14፡ አፕሊኬሽኑን በነጻ ወደ ኢንተርኔት መጫን (Deploying to Streamlit Community Cloud)',
    durationHours: 3.5,
    objectives: [
      'Connect GitHub repository to Streamlit Community Cloud (share.streamlit.io)',
      'Configure production secrets and API keys safely in the Cloud Settings panel',
      'Test live production URLs on mobile devices and tablet screens',
      'Monitor live application logs and memory consumption',
    ],
    objectivesAmharic: [
      'የGitHub ፕሮጀክቱን ከStreamlit Community Cloud ጋር ማገናኘት',
      'የGemini API ቁልፎችን በCloud Settings ውስጥ በሚስጥር ማስቀመጥ',
      'የተጠናቀቀውን የዌብ ሊንክ በስልክና በኮምፒውተር ላይ መሞከር',
      'የሰርቨር ሎግስ (Live Logs) እና የሲስተም ብቃትን መከታተል',
    ],
    whyThisMatters:
      'Deployment is the bridge between a private local development sandbox and a global production application that farmers, agronomists, and stakeholders can access 24/7 anywhere in the world.',
    whyThisMattersAmharic:
      'በራስዎ ኮምፒውተር ብቻ የነበረውን ፕሮጀክት በዓለም ዙሪያ ያለ ማንኛውም ሰው ወይም አርሶ አደር በስልኩ ሊንኩን ከፍቶ እንዲጠቀምበት ያደርጋል።',
    architectureRole: 'Global public cloud infrastructure hosting.',
    codeSnippet: `# Day 14: Streamlit Cloud Secrets Access Configuration (.streamlit/secrets.toml)
# Local development secrets file (DO NOT COMMIT TO GIT)
# GEMINI_API_KEY = "AIzaSy..."

# Production code accessing secrets safely:
import streamlit as st
import os

def get_production_api_key():
    # 1. Try Streamlit Cloud secrets
    if hasattr(st, "secrets") and "GEMINI_API_KEY" in st.secrets:
        return st.secrets["GEMINI_API_KEY"]
    # 2. Fallback to OS environment
    return os.environ.get("GEMINI_API_KEY", "")

api_key = get_production_api_key()
if api_key:
    st.sidebar.success("🔒 Cloud API Secrets Connected Securely")
else:
    st.sidebar.warning("⚠️ API Key not detected in secrets")
`,
    codeExplanation: [
      {
        line: 'st.secrets["GEMINI_API_KEY"]',
        explanation: 'Retrieves encrypted credentials configured through the Streamlit Cloud dashboard.',
        explanationAmharic: 'በCloud ሰርቨር ላይ በሚስጥር የተቀመጡ የAPI ቁልፎችን ያለ ስጋት ያነባል።',
      },
    ],
    youtubeResources: [
      {
        title: 'Deploy Streamlit App to Cloud for Free Step-by-Step',
        channel: 'Data Professor / Krish Naik',
        query: 'deploy streamlit app to streamlit cloud free tutorial',
      },
    ],
    quiz: {
      question: 'Where should production API keys be placed when deploying to Streamlit Community Cloud?',
      questionAmharic: 'አፑን Streamlit Cloud ላይ ስንጭን የGemini API Key የት ነው መቀመጥ ያለበት?',
      options: [
        'Hardcoded directly in public app.py code',
        'In the Streamlit Cloud Project "Secrets / Settings" panel as an encrypted environment variable',
        'In the README.md file',
        'In the GitHub commit message',
      ],
      correctIndex: 1,
      explanation: 'Streamlit Cloud provides a dedicated encrypted Secrets manager that injects environment variables securely at container runtime without exposing them in Git.',
      explanationAmharic: 'በStreamlit Cloud የፕሮጀክት Secrets ክፍል ውስጥ በሚስጥር መመዝገብ አለበት፤ በዚህም ማንም ሰው ኮዱን ቢያይ ቁልፉ አይጋለጥም።',
    },
  },
  {
    day: 15,
    phase: 4,
    phaseTitle: 'Phase 4: Deployment & Final Presentation (Days 13–15)',
    title: 'Documentation, Architecture Diagramming, Portfolio & Final Review',
    titleAmharic: 'ቀን 15፡ የፕሮጀክት ሰነድ (Documentation)፣ የስርዓት ዲዛይን ንድፍና የመጨረሻ ግምገማ',
    durationHours: 3.5,
    objectives: [
      'Write a professional GitHub README.md with badges, architecture flowcharts, and setup guides',
      'Create system architecture diagrams detailing the 4 AI modules and data flows',
      'Prepare a 5-minute executive demo pitch highlighting business value for African agriculture',
      'Celebrate course completion and outline next steps (Deep Learning & Edge IoT devices)!',
    ],
    objectivesAmharic: [
      'ማራኪና ሙያዊ የሆነ የGitHub README.md ሰነድ ከነንድፉ (Flowchart) ማዘጋጀት',
      'የ4ቱን ሞጁሎች የመረጃ ፍሰት (Data Flow Diagram) በግልጽ ማስቀመጥ',
      'ለአርሶ አደሮችና ለባለድርሻ አካላት የሚቀርብ የ5 ደቂቃ የፕሮጀክት ማሳያ (Demo Pitch) ማዘጋጀት',
      'የ15ቱን ቀናት ስልጠና በስኬት ማጠናቀቅ እና የወደፊት የDeep Learning & IoT እርምጃዎችን መዘርዘር!',
    ],
    whyThisMatters:
      'Even world-class code will be ignored if nobody knows how to install it or understand its value. Clear documentation and system diagrams establish you as a senior-tier AI engineer.',
    whyThisMattersAmharic:
      'ምርጥ ኮድ ቢጻፍም እንኳን ስርዓቱን የሚያስረዳ ሰነድና ንድፍ (Diagram) ከሌለው ዋጋ ያጣል፤ ጥራት ያለው ሰነድ የከፍተኛ ደረጃ AI Engineer መለያ ነው።',
    architectureRole: 'Complete system synthesis and portfolio-ready documentation.',
    codeSnippet: `# Day 15: Professional README.md Architecture Diagram Template
# # 🌱 Agri-Smart AI System
# > End-to-End AI & Machine Learning Platform for Precision Agriculture
# 
# [![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://python.org)
# [![Streamlit](https://img.shields.io/badge/Streamlit-App-red.svg)](https://streamlit.io)
# [![Gemini AI](https://img.shields.io/badge/Gemini-3.7%20Flash-green.svg)](https://ai.google.dev)
# 
# ## 🏛️ System Architecture Flow
# \`\`\`
# [ Soil Chemistry (N,P,K,pH) ] ---> [ Random Forest Classifier ] ---> [ Crop Recommendation ]
#                                                                           |
# [ Weather Forecast APIs ] ---------> [ Optimal Planting Engine ] ------+
#                                                                           |
# [ Farmer Symptom Query ] ---------> [ Gemini 3.7 Flash Agent ] -------> [ Voice & Visual Advisory ]
# \`\`\`
# 
# ## 🚀 Features
# 1. 🌾 Soil & Crop Recommender (99.3% Accuracy on 2,200 Kaggle Records)
# 2. 🌦️ Climate & Weather Ingestion Engine (Open-Meteo & NASA POWER)
# 3. 📅 Deterministic Planting Window Scheduler
# 4. 🩺 Generative AI Crop Care & Pest Diagnosis (Amharic/English)
# 5. 🔊 Voice Audio Accessibility (gTTS)
`,
    codeExplanation: [
      {
        line: '## 🏛️ System Architecture Flow',
        explanation: 'Provides instant visual clarity on how inputs flow through ML models and LLMs to produce farmer advisories.',
        explanationAmharic: 'መረጃዎች ከግብዓት ጀምሮ እስከ ውጤት እንዴት እንደሚጓዙ በግልጽ ያሳያል።',
      },
    ],
    youtubeResources: [
      {
        title: 'How to Write a Professional GitHub README',
        channel: 'FreeCodeCamp / Web Dev Simplified',
        query: 'how to write a good github readme for data science machine learning project',
      },
    ],
    quiz: {
      question: 'What are the three pillars of a production-ready AI portfolio project?',
      questionAmharic: 'አንድ የAI ፕሮጀክት ለስራ ዝግጁ ነው (Production-Ready) የሚያሰኙት 3 ዋና ዋና ነገሮች ምንድን ናቸው?',
      options: [
        'Having 10,000 likes on social media, expensive laptops, and dark mode only',
        'Clean modular codebase with tests, live working cloud deployment, and comprehensive system documentation with architecture diagrams',
        'Only having a Jupyter notebook file with no comments',
        'Printing "Hello World" 100 times',
      ],
      correctIndex: 1,
      explanation: 'Employers and stakeholders evaluate real engineering capability through: (1) modular tested code, (2) live deployed accessible software, and (3) clean architectural documentation.',
      explanationAmharic: 'ጥራት ያለውና የተፈተነ ኮድ፣ የቀጥታ የCloud ሊንክ (Live Demo) እና ግልጽ የሆነ የፕሮጀክት ሰነድ ከነንድፉ መኖር ነው።',
    },
  },
];

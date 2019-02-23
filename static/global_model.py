import pandas as pd
import numpy as np
from statsmodels.tsa.arima_model import ARIMA

temperature_data = pd.read_csv("GlobalTemperatures.csv")

temperature_data["dt"] = pd.to_datetime(temperature_data["dt"])

data = temperature_data[["dt","LandAverageTemperature"]]
data = data.set_index("dt")
data = data.fillna(method="backfill")

global_model = ARIMA(data, order=(5,1,0))
global_model_fit = global_model.fit(disp=0)

# index is the number of months after December 2015 (the end of the dataset)
index = 20
print(global_model_fit.forecast(index)[0][index - 1])
'''S&P 500 Stock Reader

The script reads in all companines in the Standard & Poor Index, provided by Wikipedia.
It then grabs the historical stock price of each ticker and saves them in PyStore. Then,
continuously adds in end-of-day stocks daily.
'''

import pandas as pd
import yfinance as yf

def read_in_sp500(
    URL: str = 'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies',
) -> pd.DataFrame:
    '''Read in all of Standard & Poor's 500 largest companies

    Args:
        URL (str): a Wikipedia url holding a data table of all S&P 500 companies

    Returns:
        pd.DataFrame: a data frame with info on all S&P 500 companies
    '''
    sp500_df = pd.read_html(URL)[0]
    sp500_df['Symbol'] = sp500_df['Symbol'].str.replace('.', '-', regex=True)
    return sp500_df


# ----------------- Run only once -------------------
def get_stock_data(
    interval: str = '1d',
) -> pd.DataFrame:
    '''Retrieves all previous day-by-day stock prices in the S&P500

       Note: This function should only run once  
    '''
    sp500_tickers = read_in_sp500()['Symbol'][:1]
    
    # Batch calls all stock tickers
    sp500_df = yf.download(
        tickers=sp500_tickers.to_list(),
        interval=interval,
    )

    sp500_df = sp500_df.stack().reset_index().rename(
        columns={'level_1': 'Ticker'})
    sp500_df.columns = sp500_df.columns.str.lower().str.replace(' ', '_')
    return sp500_df
# ---------------------------------------------------


if __name__ == '__main__':
    df = get_stock_data()
    print(df)
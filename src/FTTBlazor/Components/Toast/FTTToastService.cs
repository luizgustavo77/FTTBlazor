﻿using System;
using System.Timers;
using Timer = System.Timers.Timer;

namespace FTTBlazor
{
    public class FTTToastService : IDisposable
    {
        public event Action<string, FTTToastEnum> OnShow;
        public event Action OnHide;
        private Timer Countdown;

        public void ShowToast(string message, FTTToastEnum level)
        {
            OnShow?.Invoke(message, level);
            StartCountdown();
        }

        private void StartCountdown()
        {
            SetCountdown();

            if (Countdown.Enabled)
            {
                Countdown.Stop();
                Countdown.Start();
            }
            else
            {
                Countdown.Start();
            }
        }

        private void SetCountdown()
        {
            if (Countdown == null)
            {
                Countdown = new Timer(5000);
                Countdown.Elapsed += HideToast;
                Countdown.AutoReset = false;
            }
        }

        private void HideToast(object source, ElapsedEventArgs args)
        {
            OnHide?.Invoke();
        }

        public void Dispose()
        {
            Countdown?.Dispose();
        }
    }
}

# subscriptions/models.py
from django.db import models

# Avoid direct import at the top of the file, use lazy imports inside methods.
class Subscription(models.Model):
    customer = models.ForeignKey('customers.Customer', on_delete=models.CASCADE)
    offer = models.ForeignKey('offers.Offer', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('active', 'Active'), ('expired', 'Expired')])

    def __str__(self):
        return f'{self.customer.username} - {self.offer.title}'

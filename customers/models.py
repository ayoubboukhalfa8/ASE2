from django.contrib.auth.models import AbstractUser
from django.db import models

class Customer(AbstractUser):
    created_at = models.DateTimeField(auto_now_add=True)

    # Add related_name to avoid conflicts
    groups = models.ManyToManyField(
        'auth.Group', related_name='customer_set', blank=True, help_text='The groups this user belongs to.'
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission', related_name='customer_set', blank=True, help_text='Specific permissions for this user.'
    )

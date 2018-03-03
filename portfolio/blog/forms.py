from django import forms

from .models import Post

class PostForm(forms.ModelForm):

    class Meta:
        """tell django which model to use for form"""
        model = Post
        fields = ('title', 'text',)
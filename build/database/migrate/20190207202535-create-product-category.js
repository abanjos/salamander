'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      display_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_categories');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRlLzIwMTkwMjA3MjAyNTM1LWNyZWF0ZS1wcm9kdWN0LWNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1cCIsInF1ZXJ5SW50ZXJmYWNlIiwiU2VxdWVsaXplIiwiY3JlYXRlVGFibGUiLCJpZCIsImFsbG93TnVsbCIsImF1dG9JbmNyZW1lbnQiLCJwcmltYXJ5S2V5IiwidHlwZSIsIklOVEVHRVIiLCJkaXNwbGF5X25hbWUiLCJTVFJJTkciLCJjcmVhdGVkQXQiLCJEQVRFIiwidXBkYXRlZEF0IiwiZG93biIsImRyb3BUYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxFQUFBQSxFQUFFLEVBQUUsQ0FBQ0MsY0FBRCxFQUFpQkMsU0FBakIsS0FBK0I7QUFDakMsV0FBT0QsY0FBYyxDQUFDRSxXQUFmLENBQTJCLG9CQUEzQixFQUFpRDtBQUN0REMsTUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLFFBQUFBLFNBQVMsRUFBRSxLQURUO0FBRUZDLFFBQUFBLGFBQWEsRUFBRSxJQUZiO0FBR0ZDLFFBQUFBLFVBQVUsRUFBRSxJQUhWO0FBSUZDLFFBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQUpkLE9BRGtEO0FBT3REQyxNQUFBQSxZQUFZLEVBQUU7QUFDWkYsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBREosT0FQd0M7QUFVdERDLE1BQUFBLFNBQVMsRUFBRTtBQUNUUCxRQUFBQSxTQUFTLEVBQUUsS0FERjtBQUVURyxRQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1c7QUFGUCxPQVYyQztBQWN0REMsTUFBQUEsU0FBUyxFQUFFO0FBQ1RULFFBQUFBLFNBQVMsRUFBRSxLQURGO0FBRVRHLFFBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDVztBQUZQO0FBZDJDLEtBQWpELENBQVA7QUFtQkQsR0FyQmM7QUFzQmZFLEVBQUFBLElBQUksRUFBRSxDQUFDZCxjQUFELEVBQWlCQyxTQUFqQixLQUErQjtBQUNuQyxXQUFPRCxjQUFjLENBQUNlLFNBQWYsQ0FBeUIsb0JBQXpCLENBQVA7QUFDRDtBQXhCYyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge1xuICB1cDogKHF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemUpID0+IHtcbiAgICByZXR1cm4gcXVlcnlJbnRlcmZhY2UuY3JlYXRlVGFibGUoJ3Byb2R1Y3RfY2F0ZWdvcmllcycsIHtcbiAgICAgIGlkOiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgZGlzcGxheV9uYW1lOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgIH0sXG4gICAgICB1cGRhdGVkQXQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEVcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZG93bjogKHF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemUpID0+IHtcbiAgICByZXR1cm4gcXVlcnlJbnRlcmZhY2UuZHJvcFRhYmxlKCdwcm9kdWN0X2NhdGVnb3JpZXMnKTtcbiAgfVxufTsiXX0=